# raspberry-kiosk

React app and customization scripts to make a Media device from a RPi

## Keyboard maping

RPI_GPIO  -- KEY -- LINUX_CODE -- ACTION

4             W         17          UP
17            S         31          DOWN
27            A         30          LEFT
22            D         32          RIGHT

23            O         24          BACK
25            P         25          ENTER

To map GPIO inputs to keystrokes, you have to modify this file
```
breadboards.dts
```
Then, compile adn paste it with this command
```
sudo dtc -I dts -O dtb -o /boot/overlays/breadboard.dtbo breadboard.dts
```
You can find more information following this link
https://blog.geggus.net/2017/01/setting-up-a-gpio-button-keyboard-on-a-raspberry-pi/

## Customize boot

You can find instructions here:
https://scribles.net/customizing-boot-up-screen-on-raspberry-pi/

## Start App instead of desktop UI

https://raspberrypi.stackexchange.com/questions/101552/configure-raspberry-pi-to-run-my-application-before-gui-desktop

## Customize chromium
https://www.raspberrypi.org/forums/viewtopic.php?t=205426#:~:text=Full-screen%20mode%3A%20chromium-,out%20of%20full-screen%20mode.
https://peter.sh/experiments/chromium-command-line-switches/