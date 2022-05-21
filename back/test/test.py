from flask import Flask, send_file
from flask_restful import Resource, Api
import matplotlib.pyplot as plt
import parameters
import librosa as rosa

app = Flask("SpectrogramAPI")
api = Api(app)

class Spectrogram(Resource):

    def get(self):

        stft_params = parameters.Stft()

        # signal, sr = rosa.load("audio.wav", sr=32000)
        fn = rosa.ex("trumpet")
        signal, sr = rosa.load(fn, sr=11025)

        plt.specgram(signal, NFFT=stft_params.frame_size, Fs=1/.01,
                               noverlap=stft_params.hop_length,
                               mode="phase",
                               cmap = "bone")

        plt.savefig("image.png", dpi=200, extension="png")

        return send_file("image.png", mimetype="image/png")

    def post(self):

        return "Post"

api.add_resource(Spectrogram, "/")

if __name__ == "__main__":
    app.run()
