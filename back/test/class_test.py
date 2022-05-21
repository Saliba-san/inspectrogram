import matplotlib.pyplot as plt
import numpy as np
from audio import AudioSignal
from spectrogram import Stft
from parameters import StftParams
import librosa
from librosa import display as ld

audio = AudioSignal("audio.wav")

params = StftParams()
stft = Stft(params)

fft_frames = stft.get_stft_from_audio(audio)

plt.subplot(2, 1, 1)

flip = np.flip(fft_frames, axis=0)
ld.specshow(flip, n_fft=params.frame_size,
            hop_length=params.hop_length, sr=stft.sr , x_axis="s",
            y_axis="linear")

plt.subplot(2, 1, 2)
plt.imshow(fft_frames, cmap="viridis")
plt.show()
