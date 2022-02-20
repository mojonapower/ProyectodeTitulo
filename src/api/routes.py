"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Documento, Anuncio,Sms,Funcionario, Apoderado
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
    for i in range(len(body["numeros"])):
        message = client.message_create(
                'TestMessage',
                body['numeros'][i],
                body['mensaje'],
                { 'reference' : 'Foobar' }
            )
        saveSms = Sms(destinatario= body['numeros'][i], cuerpo=body['mensaje'], funcionarioId=body['funcionarioId'])
        db.session.add(saveSms)
        db.session.commit()
        #print(body["numeros"][i])

    body["status"]= 200
    return jsonify(body),200


@api.route('/funcionarios', methods=['GET', 'POST'])
def funcionarioManagement():
    if request.method =='GET':
        funcionarios = Funcionario.query.all()
        funcionarios = list(map(lambda x: x.serialize(), funcionarios))
        return jsonify(funcionarios), 200



@api.route('/apoderados', methods=['GET', 'POST'])
def apoderadosManagement():
    if request.method =='GET':
        apoderado = Apoderado.query.all()
        apoderado = list(map(lambda x: x.serialize(), apoderado))
        return jsonify(apoderado), 200