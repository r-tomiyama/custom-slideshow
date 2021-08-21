import * as mysql from 'promise-mysql'

export class Dao {
  connection: mysql.Connection

  constructor(connection: mysql.Connection) {
    this.connection = connection
  }

  async findAllImages(): Promise<Image[]> {
    const sql = `SELECT id, url from image`
    console.log(sql)

    const result = await this.connection.query(sql)

    return result
  }
}

type Image = {
  id: number
  url: string
}
