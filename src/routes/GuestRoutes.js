const express = require('express')
const GuestController = require('../controllers/GuestController')
const router = express.Router()

router.get('/listAll', async (req, res) => {
  try {
    const data = await GuestController.listAll()
    res.send(data)

  } catch (error) {
    res.send(error)
  }
})

router.get('/listNotChild', async (req, res) => {
  try {
    const data = await GuestController.listNotChild()
    res.send(data)
  } catch (error) {
    res.json({error: error})
    res.sendStatus(500)
  }
})

router.get('/name/:name', async (req, res) => {
  try {
    const { name } = req.params
    const data = await GuestController.findByName(name)
    res.render('confirm.ejs', {
      name: data[0].name,
      id: data[0]._id
    })

  } catch (error) {
    res.sendStatus(500)
  }
})

router.post('/saveGuest', async (req, res) => {
  try {
    const { name, isChild } = req.body
    await GuestController.saveGuest(name, isChild)
    res.sendStatus(201)

  } catch (error) {
    res.send(error)
  }
})

router.put('/confirm/:id', async (req, res) => {
  try {
    const id = req.params.id
    await GuestController.confirmPresence(id)
      .then(res.status(204))

  } catch (error) {
    if(String(error) == 'Guest already confirmed') {
      res.status(422).send()
    } else {
      res.status(500)
    } 
  }
})

router.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id
    await GuestController.deleteGuest(id)
    res.sendStatus(204)

  } catch (error) {
    res.send(error)
  }
})

module.exports = router