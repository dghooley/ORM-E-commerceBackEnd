const router = require('express').Router();
const { Tag, ProductTag, Product } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  Tag.findAll({
    include: [{
      model: Product,
      through: ProductTag
    },
  ],
  }).then((tag) => res.json (tag))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      model: Tag,
      through: ProductTag
    },
  ],
  }).then((tag) => res.json (tag))
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(body)
  .then((tag) => res.status(200).json(tag))
  .catch((err) => res.status(400).json(err))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(body, {
    where: {
      id: params.id,
    }, 
    include: [Tag],
});
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: params.id,
    },
  })
  .then((tag) => res.status(200).json(tag))
  .catch((err) => res.status(400).json(err))
});

module.exports = router;
