import express from 'express'

const app: express.Express = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(3000, () => {
  console.log('Start on port 3000.')
})

type image = {
  id: number
  url: string
}

const images: image[] = [{ id: 1, url: 'hoge.com' }]

app.get('/images', (req: express.Request, res: express.Response) => {
  res.send(JSON.stringify(images))
})
