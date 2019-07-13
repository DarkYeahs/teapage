import Axios from 'axios'

class Service {
  constructor () {
    this.instance = Axios.create({
      baseURL: 'http://teaapi.yeahschen.cn',
      timeout: 10000
    })
  }

  async getList () {
    const data = await this.get('/getlist')

    return data
  }

  async getTea () {
    const data = await this.get('/gettodaytea')

    return data
  }

  async updateTea (list) {
    const data = await this.post('/updatelist', list)

    return data
  }

  async get (url, params) {
    const {
      status,
      data
    } = await this.instance.get(url, {
      params: params
    })

    if (status !== 200) {
      throw Error()
      // return
    }

    return data
  }

  async post (url, params) {
    const {
      status,
      data
    } = await this.instance.post(url, {
      data: params
    })

    if (status !== 200) {
      throw Error()
      // return
    }

    return data
  }
}

export default new Service()
