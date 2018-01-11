# micro:bit with :MOVE mini buggy kit controlling sample via BLE

Controls [:MOVE mini buggy kit](https://www.kitronik.co.uk/5624-move-mini-buggy-kit-excl-microbit.html) which uses [micro:bit](http://microbit.org/).

## firmware

+ Goto https://makecode.microbit.org/
+ Select JavaScript mode
+ Paste code in `firmware.js`
+ Download a hex file
+ Flash the hex file to your micro:bit

## controlling script

+ Install `node` and `yarn`
+ Run `yarn` to install dependencies
+ Turn on and start micro:bit
+ Run `node dist/index.js`
+ Input commands to the prompt shown and control buggy!
  - `l` to turn left
  - `r` to turn right
  - other key to go straight

## License

MIT
