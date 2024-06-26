from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from datetime import datetime
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

db = SQLAlchemy(app)
migrate = Migrate(app, db, directory="migraciones")

class Envio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    desde = db.Column(db.String(128), nullable=False)
    hasta = db.Column(db.String(128), nullable=False)
    entrega_estimada = db.Column(db.DateTime)
    creado = db.Column(db.DateTime, default=datetime.utcnow)
    actualizado = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    peso_kgs = db.Column(db.Numeric(16, 4), nullable=True)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/envios', methods=['GET'])
def get_envios():
    envios = Envio.query.all()
    return jsonify([{'id': e.id, 'desde': e.desde, 'hasta': e.hasta, 'entrega_estimada': e.entrega_estimada} for e in envios])

@app.route('/envios', methods=['POST'])
def create_envio():
    data = request.get_json()
    nuevo_envio = Envio(desde=data['desde'], hasta=data['hasta'], entrega_estimada=data['entrega_estimada'])
    db.session.add(nuevo_envio)
    db.session.commit()
    return jsonify({'id': nuevo_envio.id}), 201

if __name__ == "__main__":
    app.run(debug=True)
