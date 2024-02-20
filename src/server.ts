
import Fastify from 'fastify'
const app = Fastify({
  logger: true
})


app.get('/unipar', ()=> {
  return 'Ola'})


  app.listen({ port: 3333 }).then( ()=> {
    console.log('SERVIDOR RODANDO')
  })
