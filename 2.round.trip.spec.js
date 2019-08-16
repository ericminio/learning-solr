const { expect } = require('chai')
const { request } = require('http')
const { bodyOf } = require('./support/message.body')

describe('hello world core', ()=> {

    it('is ready for data digestion', async ()=> {
        let message = {
            method: 'POST',
            host: 'localhost',
            port: 8983,
            path: '/solr/hello.world/update?commit=true',
            headers: {
                'content-type': 'application/json'
            }
        }
        let data = [{
            name:'Life is good',
            id:'1'
        }]
        let creation = await new Promise((resolve, reject)=>{
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
            please.end(JSON.stringify(data))
        })
        expect(creation.responseHeader.status).to.equal(0)
    })
})
