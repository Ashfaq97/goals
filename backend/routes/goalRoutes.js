const express = require('express')
const router = express.Router()
const { getGoals, setGoals, updateGoal, deleteGoal } = require('../controllers/goalController')

// router.get('/', getGoals)
// router.post('/', setGoals)
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)
// the above 4 routes can be written as the below 2 routes since there are only 2 common routes

router.route('/').get(getGoals).post(setGoals);
router.route('/:id').put(updateGoal).delete(deleteGoal);

module.exports = router