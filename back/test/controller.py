from flask import Flask, send_file
from flask_restful import Resource, Api
import matplotlib.pyplot as plt
import parameters
import librosa as rosa
import json

app = Flask("SpectrogramAPI")
api = Api(app)

class Generate_spectrogram(Resource):
    def post(self, json_request):

        json_dict = json.loads(json_request)
        parameters = StftParams().set_by_json(json_dict)

        audio = AudioSignal("./audio.wav")
        stft = Stft(parameters).set_stft_from_audio(audio)

        spectrogram = Spectrogram(stft)
        b64_img = spectrogram.visualize()

        data = {}
        data['id'] = '1'
        data['image'] = b64_img
        json_response = json.dumps(data)

        return json_response

api.add_resource(Generate_spectrogram, "/genspec")

if __name__ == "__main__":
    app.run()
