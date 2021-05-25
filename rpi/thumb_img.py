import os, sys
from wand.image import Image

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
fileDirectory = BASE_DIR.split('rpi')[0]+'/build/fig/'
thumbDirectory = BASE_DIR.split('rpi')[0]+'/build/thumbs/'

infiles = os.listdir(fileDirectory)

for file in infiles:
    file_path = fileDirectory + file
    print('input:',file_path)
    outfile = thumbDirectory + file + ".png"
    print('output:',outfile)
    image = Image(filename = file_path)
    image.resize(128, 128)
    image.format = 'png'
    image.save(filename = outfile)