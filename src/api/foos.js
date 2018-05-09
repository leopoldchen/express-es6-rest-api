import { Router } from 'express'

const foo = Router()

foo.get('/search', (req, res) => {
  res.send('hello!')
})

export default foo
