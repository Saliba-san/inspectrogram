from flask import Flask, request
from flask_restful import Resource, Api
import json
from parameters import StftParams
from audio import AudioSignal
from stft import Stft
from spectrogram import Spectrogram

app = Flask("SpectrogramAPI")
api = Api(app)

class Generate_spectrogram(Resource):
    def post(self):

        json_dict = request.get_json(force=True)
        parameters = StftParams().set_by_json(json_dict)

        audio = AudioSignal("./audio.wav")
        stft = Stft(parameters).set_stft_from_audio(audio)

        spectrogram = Spectrogram(stft)
        b64_img = spectrogram.visualize()

        data = {}
        data['id'] = '1'
        data['image'] = str(b64_img)

        json_response = json.dumps(data)

        return json_response

api.add_resource(Generate_spectrogram, "/genspec")

if __name__ == "__main__":
    app.run(port=8080 ,debug=True)
