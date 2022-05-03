from flask import current_app,jsonify,request
from app import create_app,db
from models import Musics,musics_schema

# Create an application instance
app = create_app()

@app.route("/musics", methods=["GET"], strict_slashes=False)
def musics():

	musics = Musics.query.all()
	results = musics_schema.dump(musics)

	return jsonify(results)


if __name__ == "__main__":
	app.run(debug=True)