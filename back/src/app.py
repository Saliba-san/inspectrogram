from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS


# Create various application instances
# Order matters: Initialize SQLAlchemy before Marshmallow
db = SQLAlchemy()
ma = Marshmallow()

UPLOAD_FOLDER = 'files'
ALLOWED_EXTENSIONS = {'mp3', 'mp4', 'wma', 'wav', 'ogg', 'opus'}


def create_app():
    """Application-factory pattern"""
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///data/database.db"
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

    db.init_app(app)
    ma.init_app(app)
    cors = CORS(app, resources={r"/*": {"origins": "*"}})
    return app