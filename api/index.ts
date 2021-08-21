import express from 'express'
import * as mysql from 'promise-mysql'

import { Dao } from './dao'

const dbConfig: mysql.ConnectionConfig = {
  host: '127.0.0.1',
  database: 'custom_slideshow',
  user: 'user',
  password: 'password',
  port: 3306,
}

const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => {
  console.log('Start on port 3000.')
})

app.get('/images', async (req: express.Request, res: express.Response) => {
  const connection = await mysql.createConnection(dbConfig)
  const dao = new Dao(connection)

  try {
    const images = await dao.findAllImages()
    console.log(images)
    res.send(JSON.stringify(images))
  } catch (e) {
    console.error(e)
    // TODO: エラーレスポンス
  } finally {
    await connection.end()
  }
})
