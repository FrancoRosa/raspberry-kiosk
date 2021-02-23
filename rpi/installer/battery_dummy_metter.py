from time import sleep
from flask import request, jsonify, Flask
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def home():
  return "<h1>Battery Meter Server</h1>"

@app.route('/api/v1/value', methods=['GET'])
def api_save_data():

  print(' * voltage:', 4.2)
  print(' * battery:', 99, '%')
  return jsonify({'message': True, 'value': 99})

app.run(host = '0.0.0.0', port = 9999);