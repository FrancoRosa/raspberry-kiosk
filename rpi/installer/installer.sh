sudo dtc -I dts -O dtb -o /boot/overlays/breadboard.dtbo breadboard.dts
sudo cp config.txt /boot/config.txt
sudo cp pix.script /usr/share/plymouth/themes/pix/pix.script
sudo cp cmdline.txt /boot/cmdline.txt
sudo cp logo.png /usr/share/plymouth/themes/pix/splash.png
sudo cp rc.local /etc/rc.local
sudo cp .Xsession /home/pi/.Xsession
sudo cp list_folders.py /boot/list_folders.py
sudo cp update_logo.py /boot/update_logo.py