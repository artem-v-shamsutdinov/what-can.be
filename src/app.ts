import express from 'express'
import mime from 'mime-types'
import serveIndex from 'serve-index'
const app = express()

const yearLongCacheMimeTypes = [
  'image/gif',
  'image/jpeg',
  'image/png',
  'image/webp',
  'text/javascript',
  'text/css',
  'video/mp4'
]

// const dayLongCacheMimeTypes = [
//   'text/html'
// ]
const maxAgePeriod = 1000 * 60 * 60 * 24 * 1
app.use(express.static('public', {
  maxAge: maxAgePeriod,
  setHeaders: (res: any, path: string) => {
    let mimeType = mime.lookup(path) as string
    // let maxAge = ''
    if (yearLongCacheMimeTypes.indexOf(mimeType) > -1) {
      res.setHeader('Cache-Control', 'public, max-age=31536000')
    // } else if (dayLongCacheMimeTypes.indexOf(mimeType) > -1) {
    //   maxAge = '8640'
    }
    // if (maxAge) {
    //   res.setHeader('Cache-Control', 'public, max-age=' + maxAge)
    // }
  }
}))
app.use('/', serveIndex('public'))

module.exports = app
