from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Documento(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(1000), unique=True, nullable=False)
    fecha = db.Column(db.Date, unique=False, nullable=False)
    nombre =db.Column(db.String(500), unique=False, nullable=False)
    categoria = db.Column(db.String(120), unique=False, nullable=False)
    nivel = db.Column(db.String(120), unique=False, nullable=False)
    propietario = db.Column(db.String(120), unique=False, nullable=False) #deberia ser id funcionaro
    visible = db.Column(db.Boolean(120), nullable=False)
    
    def serialize(self):
        return {
            "id": self.id,
            "url": self.url,
            "fecha": self.fecha,
            "nombre": self.nombre,
            "categoria": self.categoria,
            "nivel": self.nivel,
            "propietario": self.propietario,
            "visible": self.visible
        }

class Anuncio(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    titulo = db.Column(db.String(1000), unique=True, nullable=False)
    detalle =db.Column(db.String(1500), unique=False, nullable=False)
    autor = db.Column(db.String(50), unique=False, nullable=False)
    nivel = db.Column(db.String(50), unique=False, nullable=False)
   
    
    def serialize(self):
        return {
            "id": self.id,
            "detalle": self.detalle,
            "nivel": self.nivel,
            "autor": self.autor,
            "titulo": self.titulo,
           
        }

class Sms(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    destinatario = db.Column(db.String(15), unique=True, nullable=False)
    cuerpo =db.Column(db.String(1500), unique=False, nullable=False)
    funcionarioId = db.Column(db.Integer, db.ForeignKey('funcionario.id'))

    def serialize(self):
        return {
            "id": self.id,
            "destinatario": self.destinatario,
            "cuerpo": self.cuerpo,  
        }

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
    autor = db.relationship("Sms")

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
    descripcion = db.Column(db.String(1000), unique=False, nullable=False)
    nee = db.Column(db.Boolean, unique=False, nullable=False)
    parent_id = db.Column(db.Integer, db.ForeignKey('apoderado.id'))
    
    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "fechanac": self.fechanac,
            "nivelEducativo": self.nivelEducativo,
            "nee": self.nee,
            "descripcion": self.descripcion,
            "parent_id": self.parent_id

            # do not serialize the password, its a security breach
        }


class Apoderado(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(80), unique=False, nullable=False)
    apellido = db.Column(db.String(80), unique=False, nullable=False)
    genero = db.Column(db.String(80), unique=False, nullable=False)
    nacionalidad = db.Column(db.String(80), unique=False, nullable=False)
    ocupacion = db.Column(db.String(80), unique=False, nullable=False)
    maxNivelEducativo = db.Column(db.String(80), unique=False, nullable=False)
    fechanac = db.Column(db.Date, unique=False, nullable=False)
    apoderado = db.relationship("Ninio")

    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "genero": self.genero,
            "nacionalidad": self.nacionalidad,
            "apellido": self.apellido,
            "fechanac": self.fechanac,
            "maxNivelEducativo": self.maxNivelEducativo,
            "ocupacion": self.ocupacion,
            # do not serialize the password, its a security breach
        }


  