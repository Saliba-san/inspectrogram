import librosa

class AudioSignal():
    def __init__(self, file_path):
        self.signal, self.sr = librosa.load(file_path)
