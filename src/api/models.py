from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Funcionario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    nombre = db.Column(db.String(80), unique=False, nullable=False)
    apellido = db.Column(db.String(80), unique=False, nullable=False)
    permisos = db.Column(db.Boolean(), unique=False, nullable=False)
    telefono = db.Column(db.String(15), unique=True, nullable=False)#
    direccion = db.Column(db.String(15), unique=True, nullable=False)#
    rol = db.Column(db.String(30), unique=True, nullable=False)#
    def __repr__(self):
        return '<Funcionario %r>' % self.nombre

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "telefono": self.telefono,
            "direccion": self.direccion
            # do not serialize the password, its a security breach
        }

class Ninio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(80), unique=False, nullable=False)
    apellido = db.Column(db.String(80), unique=False, nullable=False)
    #apoderado
    fechanac = db.Column(db.Date, unique=False, nullable=False)
    nivelEducativo = db.Column(db.String(80), unique=False, nullable=False)

class Apoderado(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(80), unique=False, nullable=False)
    apellido = db.Column(db.String(80), unique=False, nullable=False)