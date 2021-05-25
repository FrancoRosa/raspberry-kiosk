from time import sleep
from flask import request, jsonify, Flask
from flask_cors import CORS, cross_origin
import json
import Adafruit_ADS1x15

adc = Adafruit_ADS1x15.ADS1115()
GAIN = 1

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

@app.route('/', methods=['GET'])
def home():
  return "<h1>Battery Meter Server</h1>"

@app.route('/api/v1/value', methods=['GET'])
def api_save_data():
  value = 2*adc.read_adc(0, gain=GAIN, data_rate=128)*0.000125
  percentage = int(122.3852 + (0.07531401 - 122.3852)/(1 + (value/3.681646)**129.1279)**0.09606746)
  if percentage > 100 : percentage = 100 
  if percentage < 0 : percentage = 0 
  print(' * voltage:', round(value,3))
  print(' * battery:', percentage, '%')
  return jsonify({'message': True, 'value': percentage})

app.run(host = '0.0.0.0', port = 9999);