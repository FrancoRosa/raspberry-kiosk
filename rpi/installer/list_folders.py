from os import listdir
from os.path import isfile, join, isdir
import json

path = '/boot/raspberry-kiosk/public/'
path = '../raspberry-kiosk/public/'

directories = [f for f in listdir(path) if isdir(join(path, f))]

tree = {}

for directory in directories:
  tree[directory] = []
  files = [f for f in listdir(path+directory)]
  tree[directory] = files

with open(path + 'files.json', 'w') as outfile:
    json.dump(tree, outfile)