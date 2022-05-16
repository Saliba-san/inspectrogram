CREATE TABLE IF NOT EXISTS music (
    id INTEGER NOT NULL
    music TEXT NOT NULL
    path TEXT NOT NULL
    PRIMARY KEY(id)
)

CREATE TABLE IF NOT EXISTS images (
    id INTEGER NOT NULL
    audio_id INTEGER NOT NULL
    window_size INTEGER
    window_type TEXT
    hop_size INTEGER
    color TEXT
    path TEXT NOT NULL

)