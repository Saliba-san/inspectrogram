import matplotlib.pyplot as plt
import numpy as np
from audio import AudioSignal
from stft import Stft
from parameters import StftParams
from spectrogram import Spectrogram
import librosa
from librosa import display as ld

audio = AudioSignal("audio.wav")

params = StftParams()
stft = Stft(params)

stft.set_stft_from_audio(audio)
spectrogram = Spectrogram(stft)

plt.subplot(2, 1, 1)

spectrogram.visualize()

plt.subplot(2, 1, 2)

spectrogram.set_strategy("matplot")
spectrogram.visualize()

plt.show()
