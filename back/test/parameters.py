class Stft:
    def __init__(self, frame_size=1024, hop_length=512, window="hann"):
        self.frame_size = frame_size
        self.hop_length = hop_length
        self.window = window
