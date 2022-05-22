from flask import Flask, request
from flask_restful import Resource, Api
import requests
import json
from models import Musics, musics_schema
from parameters import StftParams
from audio import AudioSignal
from stft import Stft
from spectrogram import Spectrogram
from routes import musics
from app import create_app

# app = Flask("SpectrogramAPI")
app = create_app()
api = Api(app)

class Generate_spectrogram(Resource):
    def post(self):

        json_dict = request.get_json(force=True)
        parameters = StftParams().set_by_json(json_dict)

        audio_id = json_dict["specId"]
        print(audio_id)

        print("#########################")
        musics = Musics.query.filter_by(id=audio_id)
        audio_file_path = musics_schema.dump(musics)[0]["path"]

        audio = AudioSignal(audio_file_path=audio_file_path)

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
    app.run(port=8080, debug=True)
