import { version } from '../../package.json'
import { Router } from 'express'
import facets from './facets'
import foos from './foos'

export default ({ config, db }) => {
  let api = Router()

  //   mount the facets resource
  api.use('/facets', facets({ config, db }))

  api.use('/foos', foos)

  // perhaps expose some API metadata at the root
  api.get('/', (req, res) => {
    res.json({ version })
  })

  return api
}
