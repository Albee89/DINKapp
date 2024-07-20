from flask import Flask, request, jsonify
from flask_migrate import Migrate
from models import db, Profile

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///profiles.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)
migrate = Migrate(app, db)

@app.route('/profiles', methods=['GET'])
def get_profiles():
    profiles = Profile.query.all()
    return jsonify([profile.to_dict() for profile in profiles])

@app.route('/profile', methods=['POST'])
def create_profile():
    data = request.json
    new_profile = Profile(
        name=data['name'],
        email=data['email'],
        password=data['password'],
        about_you=data['aboutYou'],
        why_single=data['whySingle'],
        looking_for=data['lookingFor'],
        why_no_kids=data.get('whyNoKids')
    )
    db.session.add(new_profile)
    db.session.commit()
    return jsonify(new_profile.to_dict()), 201

@app.route('/like', methods=['POST'])
def like_profile():
    profile_id = request.json.get('profileId')
    profile = Profile.query.get(profile_id)
    if profile:
        return jsonify({"message": "Profile liked", "profileId": profile_id})
    return jsonify({"error": "Profile not found"}), 404

@app.route('/dislike', methods=['POST'])
def dislike_profile():
    profile_id = request.json.get('profileId')
    profile = Profile.query.get(profile_id)
    if profile:
        return jsonify({"message": "Profile disliked", "profileId": profile_id})
    return jsonify({"error": "Profile not found"}), 404

if __name__ == '__main__':
    app.run


