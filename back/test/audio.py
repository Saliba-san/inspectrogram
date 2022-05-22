import soundfile as sf
import librosa as rosa
import base64
import io

class AudioSignal():
    def __init__(self, audio_file_path, b64_data=None):

        if b64_data:
            b_data = base64.b64decode(b64_data)
            b_data = io.BytesIO(b_data)

            self.signal, self.sr = sf.read(b_data)
        else:
            self.signal, self.sr = rosa.load(audio_file_path)
