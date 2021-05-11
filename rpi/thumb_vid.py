import subprocess
import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
fileDirectory = BASE_DIR.split('rpi')[0]+'/public/vid/'
thumbDirectory = BASE_DIR.split('rpi')[0]+'/public/thumbs/'
infiles = os.listdir(fileDirectory)
print('infiles:', infiles)

video_input_path = '/your/video.mp4'
img_output_path = '/your/image.jpg'

for file in infiles:
  file_path = fileDirectory + file
  subprocess.call([
    'ffmpeg',
    '-y',
    '-i',
    file_path,
    '-ss',
    '00:00:05.000',
    '-vframes', '1',
    thumbDirectory + file + '.png'])