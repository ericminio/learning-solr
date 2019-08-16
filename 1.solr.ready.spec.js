const { expect } = require('chai')
const { request } = require('http')
const { bodyOf } = require('./support/message.body')

describe('hello world core', ()=> {

    it('is ready', async ()=> {
        let message = {
            method: 'GET',
            host: 'localhost',
            port: 8983,
            path: '/solr/hello.world/admin/ping'
        }
        let pong = await new Promise((resolve, reject)=>{
            let please = request(message, async (response)=>{
                let body = await bodyOf(response)
                try {
                    resolve(JSON.parse(body))
                }
                catch (e) {
                    reject(e)
                }
            })
            please.on('error', (e)=>{
                reject(e)
            })
            please.end()
        })
        expect(pong.status).to.equal('OK')
    })
})
