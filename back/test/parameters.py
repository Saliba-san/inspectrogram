class Stft:

    def __init__(self, frame_size=1024, hop_length=512, window="hann",
                 mode="power", cmap="prism", sr=None, db=True, freq_slice=None):

        self.mode = mode
        self.window = window
        self.frame_size = frame_size
        self.hop_length = hop_length
        self.cmap = cmap
        self.sr = sr
        self.db = db
        self.freq_slice = freq_slice
