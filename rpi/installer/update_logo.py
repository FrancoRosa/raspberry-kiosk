from os import listdir, system
from os.path import isfile, join, isdir
import json

path = '/boot/raspberry-kiosk/public/'
path = '../raspberry-kiosk/public/'
path = 'build/'
path = '/boot/build/'

if 'logo.png' in listdir(path):
  system("sudo cp /boot/build/logo.png /usr/share/plymouth/themes/pix/splash.png")

