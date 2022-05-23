from flask import Flask, request
from flask_restful import Resource, Api
import requests
import json
from models import Musics, musics_schema
from parameters import StftParams
from audio import AudioSignal
from stft import Stft
from spectrogram import Spectrogram
from routes import musics, allowed_file
from app import create_app
import os
from flask import current_app,jsonify,request,flash, redirect, url_for
from app import create_app,db, UPLOAD_FOLDER, ALLOWED_EXTENSIONS
from models import Musics,musics_schema,Images,images_schema
from werkzeug.utils import secure_filename
from tinytag import TinyTag
import numpy as np

# app = Flask("SpectrogramAPI")
app = create_app()
api = Api(app)

app.secret_key = 'bcyiae7doqbucmopighyi'

class Generate_spectrogram(Resource):
    def post(self):

        json_dict = request.get_json(force=True)
        parameters = StftParams().set_by_json(json_dict)

        audio_id = json_dict["specid"]
        print(audio_id)

        musics = Musics.query.filter_by(id=audio_id)
        audio_file_path = musics_schema.dump(musics)[0]["path"]

        audio = AudioSignal(audio_file_path=audio_file_path)

        stft = Stft(parameters).set_stft_from_audio(audio)

        spectrogram = Spectrogram(stft)
        b64_img = spectrogram.visualize()

        img = str(b64_img)

        return img

api.add_resource(Generate_spectrogram, "/genspec")

@app.route("/uploadfile", methods=["GET","POST"], strict_slashes=False)
def musics_post():
	if request.method == "POST":
		print(request.files)
		if 'file' not in request.files:
			flash('No file part')
			return redirect(request.url)

		file = request.files['file']
		# If the user does not select a file, the browser submits an
		# empty file without a filename.
		if file.filename == '':
			flash('No selected file')
			return redirect(request.url)

		path = app.config['UPLOAD_FOLDER']+ '/' + file.filename

		if file and allowed_file(file.filename):
			filename = secure_filename(file.filename)
			file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))

		music_file = TinyTag.get(path)
		name = file.filename
		if music_file.title:
			name = music_file.title
		artist = music_file.artist
		new_music = Musics(music=name, artist=artist, path=path)
		db.session.add(new_music)
		db.session.commit()

	musics = Musics.query.all()
	results = musics_schema.dump(musics)
	return jsonify(results)


if __name__ == "__main__":
    app.run(port=8080, debug=True)
