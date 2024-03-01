const Guest = require('../models/GuestModel')

class Controller {
  async listAll() {
    try {
      const data = await Guest.find()
      return data
  
    } catch (error) {
      return error
    }
  }
  
  async listNotChild() {
    try {
      const data = await Guest.find({
        isChild: false
      })
      return data
  
    } catch (error) {
      return error
    }
  }
  
  async saveGuest(name, isChild) {
    try {
      const verification = await Guest.find({name: name})
      if(verification.length > 0) {
        throw 'Guest already saved'
      }

      const data = await Guest.create({
        name,
        isChild
      })
      return data
  
    } catch (error) {
      return error
    }
  }
  
  async confirmPresence(id) {
    try {
      const verification = await Guest.findById(id)
      if(verification.confirm) {
        throw 'Guest already confirmed'
      }

      const data = await Guest.findByIdAndUpdate(id, {
        confirm: true
      })
      return data
  
    } catch (error) {
      return error
    }
  }

  async deleteGuest(id) {
    try {
      const data = await Guest.findByIdAndDelete(id)
      return data

    } catch (error) {
      return error
    }
  }
}

const GuestController = new Controller()

module.exports = GuestController