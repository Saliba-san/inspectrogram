import numpy as np
import matplotlib.pyplot as plt
from librosa import display as ld
from abc import ABC, abstractmethod
import copy
import io
import base64

mpl.rcParams['savefig.pad_inches'] = 0

class VisualizationStrategy(ABC):

    @abstractmethod
    def visualize(self):
        pass

class RosaVisualizationStrategy(VisualizationStrategy):

    def visualize(self, stft, cmap=None):

        fft_frames = copy.deepcopy(stft.fft_frames)
        fft_frames = np.flip(fft_frames, axis=0)

        ld.specshow(fft_frames, n_fft=stft.frame_size,
                    hop_length=stft.hop_length, sr=stft.sr , x_axis="s",
                    y_axis="linear")

        bytes_string = io.BytesIO()
        plt.autoscale(tight=True)
        plt.savefig(bytes_string, format='png', bbox_inches="tight")
        bytes_string.seek(0)
        b64_img = base64.b64encode(bytes_string.read())

        plt.close()

        return b64_img

class MatplotVisualizationStrategy(VisualizationStrategy):

    def visualize(self, stft, cmap):

        plt.imshow(stft.fft_frames, cmap=cmap)
        plt.xlabel("")
        plt.ylabel("")
        plt.xticks([])
        plt.yticks([])

        bytes_string = io.BytesIO()
        plt.autoscale(tight=True)
        plt.savefig(bytes_string, format='png', bbox_inches="tight")
        bytes_string.seek(0)
        b64_img = base64.b64encode(bytes_string.read())

        plt.close()
        return b64_img

class Spectrogram():

    def __init__(self, stft):
        self.stft = stft
        self.cmap = stft.cmap

        if self.cmap == "default":
            self.visualizer = RosaVisualizationStrategy()
        else:
            self.visualizer = MatplotVisualizationStrategy()

    def set_cmap(self, cmap):
        self.cmap = cmap

    def set_strategy(self, strategy="rosa"):

        strategies = {
                       "rosa": RosaVisualizationStrategy,
                       "matplot": MatplotVisualizationStrategy
                     }

        assert strategy in strategies.keys(), "Estratégia de visualização inexistente"

        self.visualizer = strategies[strategy]()

    def visualize(self):
        img = self.visualizer.visualize(self.stft, self.cmap)
        return img

