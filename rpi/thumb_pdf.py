#Install Ghost script before python package's installation from: http://www.a-pdf.com/convert-to-pdf/gs.exe

from wand.image import Image
from wand.color import Color

import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
fileDirectory = BASE_DIR.split('rpi')[0]+'/build/pdf/'
thumbDirectory = BASE_DIR.split('rpi')[0]+'/build/thumbs/'
infiles = os.listdir(fileDirectory)
print('infiles:', infiles)


for file in infiles:
  file_path = fileDirectory + file + '[0]'
  print(file_path)  
  imageFromPdf = Image(filename=file_path)

  image = Image(
      format = "jpg",
      width = imageFromPdf.width,
      height = imageFromPdf.height
  )
  
  image.background_color = Color("white")
  image.alpha_channel = 'remove'
  image.composite(
     imageFromPdf.sequence[0],
     top=0,
     left=0
  )
  image.format = 'png'
  image.save(filename = thumbDirectory + file + '.png')
