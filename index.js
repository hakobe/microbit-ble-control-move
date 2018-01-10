import BBCMicrobit from 'bbc-microbit'
import readline from 'readline'

const discover = () =>
  new Promise(resolve => {
    BBCMicrobit.discover(microbit => {
      resolve(microbit)
    })
  })

const connectAndSetUp = microbit =>
  new Promise(resolve => {
    microbit.connectAndSetUp(resolve)
  })

const writeStringUart = (microbit, str) =>
  new Promise(resolve => {
    microbit.writeUart(Buffer.from(str + '\n'), resolve)
  })

const run = async () => {
  console.log('start')
  const microbit = await discover()
  console.log('discovered')

  microbit.on('disconnect', () => {
    console.log('disconnected')
    process.exit(0)
  })

  const handle = signal => {
    console.log(`Received ${signal}`)
    microbit.disconnect()
  }
  process.on('SIGINT', handle)
  process.on('SIGTERM', handle)

  await connectAndSetUp(microbit)
  console.log('connected')

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  rl.prompt()
  rl.on('line', async line => {
    await writeStringUart(microbit, line[0])
    console.log('wrote: ' + line[0])
    rl.prompt()
  })
}

run()
