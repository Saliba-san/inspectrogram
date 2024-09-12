import os
from flask import current_app,jsonify,request,flash, redirect, url_for
from app import create_app,db, UPLOAD_FOLDER, ALLOWED_EXTENSIONS
from models import Musics,musics_schema,Images,images_schema
from werkzeug.utils import secure_filename
from tinytag import TinyTag
import numpy as np


# Create an application instance
app = create_app()

app.secret_key = 'bcyiae7doqbucmopighyi'

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route("/musics", methods=["GET"], strict_slashes=False)
def musics():
    musics = Musics.query.all()
    results = musics_schema.dump(musics)
    #ids = [dict['id'] for dict in results]
    #idxs = (np.where(ids) == id)

    #path = np.array(results)[idxs]['path']
    return (jsonify(results))

@app.route("/uploadfile", methods=["GET","POST"], strict_slashes=False)
def musics_post():
	if request.method == "POST":
		print(request)
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

@app.route("/images", methods=["GET"], strict_slashes=False)
def images():

	images = Images.query.all()
	results = images_schema.dump(images)

	return jsonify(results)


if __name__ == "__main__":
	app.run(host='localhost', port=8080, debug=True)
