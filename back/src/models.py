from app import db,ma

class Musics(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    music = db.Column(db.Text, nullable=False)
    artist = db.Column(db.Text, nullable=True)
    path = db.Column(db.Text, nullable=False)


    def __repr__(self):
        return "<Musics %r>" % self.music

# Generate marshmallow Schemas from your models
class MusicsSchema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("id","music", "artist", "path")


musics_schema = MusicsSchema()
musics_schema = MusicsSchema(many=True)