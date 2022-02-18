"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Documento, Anuncio,Sms,Funcionario
from api.utils import generate_sitemap, APIException
from datetime import datetime
import messagebird

api = Blueprint('api', __name__)

@api.route('/getAllDocument', methods=['GET'])
def returnDocumentos():
    documentos = Documento.query.all()
    documentos = list(map(lambda x: x.serialize(), documentos))
    return jsonify(documentos), 200

@api.route('/postDocument', methods=['POST'])
def addDocumento():
    body = request.get_json()
    newDocument = Documento()
    
    newDocument.url = body['url']
    newDocument.fecha = datetime.now()
    newDocument.nombre = body['nombre']
    newDocument.categoria = body['categoria']
    newDocument.nivel = body['nivel']
    newDocument.propietario = body['propietario']
    newDocument.visible = True

    db.session.add(newDocument)
    db.session.commit()
    return jsonify('documentos'), 200

@api.route('/getAllAnnoucement', methods=['GET'])
def returnAnnoucement():
    annoucement = Anuncio.query.all()
    annoucement = list(map(lambda x: x.serialize(), annoucement))
    return jsonify(annoucement), 200

@api.route('/postAnnoucement', methods=['POST'])
def addAnnoucement():
    body = request.get_json()
    newAnnoucement = Anuncio(titulo=body['titulo'], detalle=body['detalle'], autor=body['autor'],nivel=str(body['nivel']))
    db.session.add(newAnnoucement)
    db.session.commit()
    return jsonify(body), 200

@api.route('/sendSMS', methods=['POST'])
def sms():
    body = request.get_json()
    client = messagebird.Client(os.getenv("ACCESS_KEY"))#disponible en .env
    message = client.message_create(
          'TestMessage',
          body['numero'],
          body['mensaje'],
          { 'reference' : 'Foobar' }
      )
    saveSms = Sms(destinatario=body['numero'], cuerpo=body['mensaje'], funcionarioId=body['funcionarioId'])
    db.session.add(saveSms)
    db.session.commit()

    body["status"]= 200
    return jsonify(body),200

@api.route('/user', methods=['POST'])
def handle_hello():
    
    if request.method =='POST':
        body = request.get_json() # obtener el request body de la solicitud
        if body is None:
            return "The request body is null", 400
        if 'email' not in body:
            return 'Especificar email', 400
        if 'password' not in body:
            return 'Especificar password',400
        #estoy consultando si existe alguien con el email que mande en la api y consigo la primera coincidencia
        onePeople = Funcionario.query.filter_by(email=body["email"]).first()
        if onePeople:
            if (onePeople.password == body["password"] ):
                #CUANDO VALIDAMOS LA PASSWORD CREAREMOS EL TOKEN
                #expira = datetime.timedelta(minutes=2)
                #access_token = create_access_token(identity=onePeople.email, expires_delta=expira)
                data = {
                    "info_user": onePeople.serialize(),
                    
                    #"token": access_token,
                    #"expires": expira.total_seconds()
                }
                return(jsonify(data))
            else:
                return(jsonify({"mensaje":False}))
        else:
            return(jsonify({"mensaje":"mail no se encuentra registrado"}))



