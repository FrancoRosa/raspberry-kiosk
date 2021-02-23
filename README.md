# raspberry-kiosk

> React app and customization scripts to make a Media/eBook device from a RPi
# Live View

<p align="center">
  <a href="https://raspberry-kiosk.netlify.app">
    <img width="480" height="260" src="demo.gif">
  </a>
</p> 

Instructions:
- Use the following keys to navigate:

| KEY | ACTION |
|-----|--------|
| W   | UP     | 
| S   | DOWN   | 
| A   | LEFT   | 
| D   | RIGHT  | 
| O   | BACK   | 
| P   | ENTER  |

Disclaimer: 
- This app was designed to fit on a 840x480 screen. 
- Large files take some time to load, be patient. 

## Deploy on RPi:
 Run the installer on the rpi file, then use your custom keyboard to navigate as detailed on the hardware seccion

## Keyboard maping

This project uses push buttons connected to the RPi GPIO to navigate throug the application.  

### Hardware

|RPI_GPIO | KEY | LINUX_CODE | ACTION |
|---------|-----|------------|--------|
|4        | W   | 17         | UP     | 
|17       | S   | 31         | DOWN   | 
|27       | A   | 30         | LEFT   | 
|22       | D   | 32         | RIGHT  | 
|23       | O   | 24         | BACK   | 
|25       | P   | 25         | ENTER  |

### Software
To map GPIO inputs to keystrokes, you have to modify this file
```
breadboards.dts
```
Then, compile and paste it with this command
```
sudo dtc -I dts -O dtb -o /boot/overlays/breadboard.dtbo breadboard.dts
```
You can find more information following this link
https://blog.geggus.net/2017/01/setting-up-a-gpio-button-keyboard-on-a-raspberry-pi/

## Battery Metering

If you are powering your device with bateries you can add the power meter feature with an ADC.

We are using a ADS1115 module with the fo9llowing connections

### Hardware

|RPI Pinout      | ADS1115 |Description|
|----------------|---------|------------|
|3.3V      (pin1)| VDD     | -------- |
|GND (pin6,14,20)| GND     | -------- |
|GPIO2 SDA (pin3)| SDA     | -------- |
|GPIO3 SCL (pin5)| SCL     | -------- |
|GND (pin6,14,20)| ADDR    | -------- |
|---             | A0      | To resistor voltage divisor |

### Voltage to baterry percentage
We will use this table as reference
|Voltage      | Percentage |
|-------------|---------   |
|      3.27   |        0   |        
|      3.69   |       10   |        
|      3.73   |       20   |        
|      3.77   |       30   |        
|      3.8    |       40   |        
|      3.84   |       50   |        
|      3.87   |       60   |        
|      3.95   |       70   |        
|      4.02   |       80   |        
|      4.11   |       90   |        
|      4.2    |      100   |        

We used https://mycurvefit.com/  ()to apply a curve fiting algoritm to obtain the following formula
```
y = 122.3852 + (0.07531401 - 122.3852)/(1 + (x/3.681646)^129.1279)^0.09606746
```
where x is the voltage obtained and y the calculated percentage, on python code it should look like:
```python
y = 122.3852 + (0.07531401 - 122.3852)/(1 + (x/3.681646)**129.1279)**0.09606746
```


## Sources
### Customize boot

You can find instructions here:
https://scribles.net/customizing-boot-up-screen-on-raspberry-pi/

### Start App instead of desktop UI

https://raspberrypi.stackexchange.com/questions/101552/configure-raspberry-pi-to-run-my-application-before-gui-desktop

### Customize chromium
https://www.raspberrypi.org/forums/viewtopic.php?t=205426#:~:text=Full-screen%20mode%3A%20chromium-,out%20of%20full-screen%20mode.
https://peter.sh/experiments/chromium-command-line-switches/

### Clone SD Card and shink to share or even use less space
https://mtyka.github.io/raspberrypi/2019/07/25/shrink-raspberrypi-image.html

https://medium.com/@kitze/%EF%B8%8F-from-react-to-an-electron-app-ready-for-production-a0468ecb1da3

