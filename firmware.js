bluetooth.onBluetoothConnected(() => {
  basic.showIcon(IconNames.EigthNote)
  basic.pause(1000)
  basic.clearScreen()
})

bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), () => {
  const receivedChar = bluetooth.uartReadUntil(
    serial.delimiters(Delimiters.NewLine)
  )
  if (receivedChar === 'l') {
    basic.showIcon(IconNames.Diamond)
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 0)
  } else if (receivedChar === 'r') {
    basic.showIcon(IconNames.SmallSquare)
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 180)
  } else {
    basic.showIcon(IconNames.Triangle)
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
  }
})

bluetooth.startUartService()
