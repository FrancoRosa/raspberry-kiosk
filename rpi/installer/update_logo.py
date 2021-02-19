from os import listdir, system, popen
from os.path import isfile, join, isdir
import json

path = '/boot/raspberry-kiosk/public/'
path = '../raspberry-kiosk/public/'
path = 'build/'
path = '/boot/build/'

def update_logo():
  if 'logo.png' in listdir(path):
    system("sudo cp /boot/build/logo.png /usr/share/plymouth/themes/pix/splash.png")

def usb_available():
    output = popen('lsblk').read()
    return 'sda' in output

def create_mount_folder():
    system('sudo mkdir /media/pendrive')

def mount_pendrive():
    system('sudo mount -t auto /dev/sda1 /media/pendrive')

def update_folder_present():
    output = popen('ls /media/pendrive').read()
    return 'update' in output

def move_update():
    system('sudo rm -r /boot/build');
    system('sudo cp -r /media/pendrive/update/* /boot/');

update_logo()
if usb_available():
    create_mount_folder()
    mount_pendrive()
    if update_folder_present():
        move_update()
