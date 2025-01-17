import express from 'express'
import {v4 as uuid} from 'uuid'
const router = express.Router()

// MOCK DATABASE
const users = []

router.get('/',(req,res)=> {
    res.send(users)
})

router.post('/',(req,res)=> {
    const user = req.body
    users.push({...user , id:uuid()})
    res.send(`${user.name} has been added successfully`)
})

router.get('/:id',(req,res) => {
    const {id} = req.params
    const findUser = users.find((user) => user.id === id)
    res.send(findUser)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const FF = users.filter((user) => user.id !== id)
    res.send(`${FF} deleted successfully from database`);
  });

export default router