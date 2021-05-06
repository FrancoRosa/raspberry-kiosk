#Install Ghost script before python package's installation from: http://www.a-pdf.com/convert-to-pdf/gs.exe

from wand.image import Image
from wand.display import display
import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
fileDirectory = BASE_DIR.split('rpi')[0]+'\public\pdf'
infiles = os.listdir(fileDirectory)
outFileName="outfile.png"

for file in infiles:
  file_path = fileDirectory + '\\' + file

  imageFromPdf = Image(filename=file_path)

  pages = len(imageFromPdf.sequence)
  print(pages)

  image = Image(
      width=imageFromPdf.width,
      height=imageFromPdf.height * pages
  )

  for i in range(pages):
      image.composite(
          imageFromPdf.sequence[i],
          top=imageFromPdf.height * i,
          left=0
      )

  image.format="png"
  image.save(filename=fileDirectory+file)

  display(image)