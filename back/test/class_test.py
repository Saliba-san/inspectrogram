import matplotlib.pyplot as plt
import numpy as np
from audio import AudioSignal
from spectrogram import Spectrogram
from parameters import Stft
import librosa
from librosa import display as ld

audio = AudioSignal("audio.wav")

params = Stft()
spectrogram = Spectrogram(params)

stft = spectrogram.get_stft_from_audio(audio)

plt.subplot(2, 1, 1)

flip = np.flip(stft, axis=0)
ld.specshow(flip, n_fft=params.frame_size,
            hop_length=params.hop_length, sr=spectrogram.sr , x_axis="s",
            y_axis="linear")

plt.subplot(2, 1, 2)
plt.imshow(stft, cmap="viridis")
plt.show()
