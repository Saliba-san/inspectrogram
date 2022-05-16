from app import db,ma

class Musics(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    music = db.Column(db.Text, nullable=False)
    artist = db.Column(db.Text, nullable=True)
    path = db.Column(db.Text, nullable=True)


    def __repr__(self):
        return "<Music %r, Name %r>" % self.id, self.music

# Generate marshmallow Schemas from your models
class MusicsSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("id","music", "artist", "path")


class Images(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    music_id = db.Column(db.Text, db.ForeignKey('musics.id'))
    window_size = db.Column(db.Integer, nullable=False)
    hop_size  = db.Column(db.Integer, nullable=False)
    window_type = db.Column(db.Text, nullable=True)
    color = db.Column(db.Text, nullable=False)
    path = db.Column(db.Text, nullable=True)

    def __repr__(self):
        return "<Image %r, From Music %r>" % self.id, self.music_id

# Generate marshmallow Schemas from your models
class ImagesSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("id","music_id", "window_size", "hop_size", "window_type", "color", "path")

musics_schema = MusicsSchema()
musics_schema = MusicsSchema(many=True)

images_schema = ImagesSchema()
images_schema = ImagesSchema(many=True)