from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Profile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)
    about_you = db.Column(db.Text, nullable=False)
    why_single = db.Column(db.Text, nullable=False)
    looking_for = db.Column(db.Text, nullable=False)
    why_no_kids = db.Column(db.Text, nullable=True)
    avatar = db.Column(db.String(120), nullable=True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'about_you': self.about_you,
            'why_single': self.why_single,
            'looking_for': self.looking_for,
            'why_no_kids': self.why_no_kids,
            'avatar': self.avatar or 'default_avatar_url',  # Default avatar URL
        }
