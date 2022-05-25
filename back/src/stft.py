import numpy as np
import scipy
import parameters
import matplotlib.pyplot as plt
import librosa as rosa

class Stft():

    def __init__(self, parameters):

        self.mode = parameters.mode
        self.window = parameters.window
        self.frame_size = parameters.frame_size
        self.hop_length = parameters.hop_length
        self.cmap = parameters.cmap
        self.sr = parameters.sr
        self.db = parameters.db
        self.freq_slice = parameters.freq_slice
        self.spectral_maxima = None

    def set_stft(self, signal):

        assert self.frame_size > self.hop_length, "Tamanho de salto inferior a tamanho de quadro de FFT"

        mode_transform = {
                           "power": np.abs,
                           "abs": np.abs,
                           "angle": np.angle,
                           "real": np.real,
                           "complex": np.imag
                           }

        assert self.mode in mode_transform.keys(), "Modo inexistente"

        signal = signal - signal.mean()

        f, t, fft_frames = scipy.signal.stft(signal, fs=self.sr,
                                                     window=self.window,
                                                     nperseg=self.frame_size,
                                                     noverlap=self.hop_length)

        fft_frames = rosa.stft(signal, n_fft=self.frame_size,
                               hop_length=self.hop_length,
                               window=self.window)

        if self.freq_slice is not None:
            fft_frames = fft_frames[self.freq_slice]

        fft_frames = mode_transform[self.mode](fft_frames)

        if self.mode == "power":
            fft_frames = np.square(fft_frames)

        if self.db == "db":
            fft_frames = rosa.amplitude_to_db(fft_frames, ref=np.max)
        else:
            fft_frames[np.where(fft_frames <= 0)] = 1e-12
            fft_frames = 10*np.log10(fft_frames)

        fft_frames = np.flip(fft_frames, axis=0)

        self.fft_frames = fft_frames

    def set_stft_from_audio(self, audio_signal):

        self.sr = audio_signal.sr

        self.set_stft(audio_signal.signal)

        return self

    def get_stft(self):

        assert self.fft_frames is not None, "SFTF data not defined"

        return self.fft_frames

    # def get_frame_maxima(self, fft_frame, n=1):

    #     return np.mean(np.argpartition(fft_frame, -n)[-n:])

    def set_spectral_maxima(self, stft_params, n=1):

        maxima = np.zeros(self.fft_frames.shape[1])

        for f, frame in enumerate(self.fft_frames.T):
            maxima[f] = np.argpartition(fft_frame, -1)[-1]

        self.spectral_maxima = maxima
