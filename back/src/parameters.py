import json
class StftParams:

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

    def set_by_json(self, json_dict):
        self.db = json_dict["intensity"]
        self.analysis = json_dict["analysis"]
        self.mode = json_dict["mode"]
        self.window = json_dict["window"]
        self.frame_size = json_dict["framelength"]
        self.hop_length = json_dict["hoplength"]
        self.cmap = json_dict["cmap"]

        return self
