const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [Product],
  })
  .then((categories) => res.json(categories))
  .catch((err) => res.status(500).json(err))
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id:req.params.id,
    },
    include: [Product],
  })
  .then((categories) => res.json(categories))
  .catch((err) => res.status(400).json(err))
});

router.post('/', ({body}, res) => {
  // create a new category
  Category.create(body)
  .then((category) => res.status(200).json(category))
  .catch((err) => res.status(400).json(err))

});

router.put('/:id', ({body, params}, res) => {
  // update a category by its `id` value
  Category.update(body, {
    where: {
      id: params.id,
    },  
  })
  .then((category) => res.status(200).json(category))
  .catch((err) => res.status(400).json(err))
});

router.delete('/:id', ({params}, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: params.id,
    },  
  })
  .then((category) => res.status(200).json(category))
  .catch((err) => res.status(400).json(err))
});

module.exports = router;
