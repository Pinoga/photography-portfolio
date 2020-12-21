import cors from 'cors'
import express from 'express'
import routes from './routes'

const port = 3333
const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)
app.listen(port, () => console.log('Listening on port ' + port))
