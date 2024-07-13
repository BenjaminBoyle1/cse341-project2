const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const apiController = require('../controllers/apiController');

// CRUD routes
router.get('/items', apiController.getItems);
router.post('/items', [
  check('name').notEmpty().withMessage('Name is required'),
  check('description').notEmpty().withMessage('Description is required'),
  check('price').isNumeric().withMessage('Price must be a number'),
  check('category').notEmpty().withMessage('Category is required'),
  check('stock').isNumeric().withMessage('Stock must be a number')
], apiController.createItem);
router.put('/items/:id', [
  check('name').optional().notEmpty().withMessage('Name is required'),
  check('description').optional().notEmpty().withMessage('Description is required'),
  check('price').optional().isNumeric().withMessage('Price must be a number'),
  check('category').optional().notEmpty().withMessage('Category is required'),
  check('stock').optional().isNumeric().withMessage('Stock must be a number')
], apiController.updateItem);
router.delete('/items/:id', apiController.deleteItem);

module.exports = router;
