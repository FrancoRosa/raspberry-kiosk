import subprocess
video_input_path = '/your/video.mp4'
img_output_path = '/your/image.jpg'
subprocess.call(['ffmpeg', '-i', video_input_path, '-ss', '00:00:00.000', '-vframes', '1', img_output_path])