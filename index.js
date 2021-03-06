const port = 3009
const host = 'tv-cloud.localtest.me'

const messageTypes = [
  'sync'
].reduce((accum, msg) => {
  accum[ msg ] = msg
  return accum
}, {})

module.exports = {
  port,
  host,
  messageTypes,
  uri: `http://${host}:${port}`
}
