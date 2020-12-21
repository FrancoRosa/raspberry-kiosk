sudo dtc -I dts -O dtb -o /boot/overlays/breadboard.dtbo breadboard.dts
sudo cp config.txt /boot/config.txt
sudo cp pix.script /usr/share/plymouth/themes/pix/pix.script
sudo cp cmdline.txt /boot/cmdline.txt
sudo cp logo.png /usr/share/plymouth/themes/pix/splash.png