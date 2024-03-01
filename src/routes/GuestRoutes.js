const express = require('express')
const GuestController = require('../controllers/GuestController')
const router = express.Router()

router.get('/listAll', async (req, res) => {
  try {
    const data = await GuestController.listAll()
    res.json({
    data: data
  })

  } catch (error) {
    res.json({error: error})
    res.sendStatus(500)  
  }
})

router.get('/listNotChild', async (req, res) => {
  try {
    const data = await GuestController.listNotChild()
    res.json({
    data: data
  })
  } catch (error) {
    res.json({error: error})
    res.sendStatus(500)
  }
})

router.post('/saveGuest', async (req, res) => {
  try {
    const { name, isChild } = req.body
    const data = await GuestController.saveGuest(name, isChild)
    res.json({data: data})

  } catch (error) {
    res.json({error: error})
    res.sendStatus(201)
  }
})

router.put('/confirm/:id', async (req, res) => {
  try {
    const id = req.params.id
    const data = await GuestController.confirmPresence(id)
    res.json({data: data})

  } catch (error) {
    res.json({error: error})
    res.sendStatus(422)
  }
})

router.delete('/delete/:id', async (req, res) => {
  try {
    const id = req.params.id
    await GuestController.deleteGuest(id)
    res.sendStatus(200)

  } catch (error) {
    res.json({error: error})
    res.sendStatus(422)
  }
})

module.exports = router