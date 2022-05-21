from flask import current_app,jsonify,request
from app import create_app,db
from models import Musics,musics_schema,Images,images_schema

# Create an application instance
app = create_app()

@app.route("/musics", methods=["GET"], strict_slashes=False)
def musics():

	musics = Musics.query.all()
	results = musics_schema.dump(musics)

	return jsonify(results)

# @app.route("/musics-post", strict_slashes=False)
# def musics_post():

# 	new_music = Musics(music="Burnin for you", artist="BOC")
# 	db.session.add(new_music)
# 	db.session.commit()
# 	musics = Musics.query.all()
# 	results = musics_schema.dump(musics)

# 	return jsonify(results)

@app.route("/images", methods=["GET"], strict_slashes=False)
def images():

	images = Images.query.all()
	results = images_schema.dump(images)

	return jsonify(results)


if __name__ == "__main__":
	app.run(debug=True)