"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Documento, Anuncio
from api.utils import generate_sitemap, APIException
from datetime import datetime
api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


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