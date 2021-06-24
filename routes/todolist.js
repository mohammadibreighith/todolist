const pool = require('../DB/db');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { description } = req.body;
  if (description) {
    try {
      const newTask = await pool.query(
        'INSERT INTO todolist (description,achieved) VALUES($1,FALSE) RETURNING *',
        [description],
      );
      return res.status(200).json(newTask.rows[0]);
    } catch (err) {
      return res.json(err);
    }
  } else return res.status(400).json('Bad Request');
});

router.get('/', async (req, res) => {
  try {
    const todoList = await pool.query('SELECT * FROM todolist');
    return res.status(200).json(todoList.rows);
  } catch (err) {
    return res.json(err);
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    try {
      await pool.query('UPDATE todolist SET achieved = TRUE WHERE id =$1', [id]);
      return res.status(200).json('UPDATED SUCCESSFULLY');
    } catch (err) {
      return res.json(err);
    }
  } else return res.status(400).json('Bad Request');
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (id) {
    try {
      const taskDeleted = await pool.query('DELETE FROM todolist WHERE id =$1 RETURNING *', [id]);
      return res.status(200).json(taskDeleted.rows);
    } catch (err) {
      return res.json(err);
    }
  } else return res.status(400).json('Bad Request');
});
module.exports = router;
