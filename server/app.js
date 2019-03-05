const Koa = require('koa')
const app = new Koa()
const serve = require('koa-static')
const path = require('path')

const home = serve(path.join(__dirname) + '/../dist/')

app.use(home)
app.listen(3002)
