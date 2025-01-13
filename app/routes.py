from flask_restful import Api, Resource
from flask import request
from .models import Room, Reservation, User
from . import db

api = Api()


class RoomResource(Resource):
    def get(self):
        rooms = Room.query.all()
        return [
            {"id": r.id, "name": r.name, "description": r.description} for r in rooms
        ], 200

    def post(self):
        data = request.get_json()
        room = Room(name=data["name"], description=data.get("description"))
        db.session.add(room)
        db.session.commit()
        return {"message": "Room created"}, 201


api.add_resource(RoomResource, "/rooms")


class UserResource(Resource):
    def get(self):
        users = User.query.all()
        return [{"id": u.id, "usuário": u.username} for u in users], 200

    def post(self):
        data = request.get_json()
        user = User(username=data["name"], password=data["description"], permissions= data["permissions"])
        db.session.add(user)
        db.session.commit()
        return {"message": "User created"}, 201


api.add_resource(UserResource, "/users")


class ReservationResource(Resource):
    def get(self):
        reservation = Reservation.query.all()
        return [{"id": r.id, "user_id": r.user_id} for r in reservation], 200

    def post(self):
        data = request.get_json()
        reservation = Reservation(
            user_id=data["user_id"],room_id = data["room_id"], start_time=data["start_time"], end_time = data["end_time"], reason = data["reason"]
        )
        db.session.add(reservation)
        db.session.commit()
        return {"message": "Reservation created"}, 201


api.add_resource(ReservationResource, "/reservations")
