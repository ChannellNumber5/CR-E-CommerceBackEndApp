const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{model: Product, through: ProductTag}]
    });
    res.status(200).json(tagData);
  } catch (err){
      res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try{
    const tagData = await Tag.findByPK(req.params.id, {
      include: [{model: Product, through: ProductTag}]
    });
    res.status(200).json(tagData);
  } catch (err){
      res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create({
    tag_name:res.body.tag_name
  })
  .then((newTag) => res.status(200).json(newTag))
  .catch((err) => {
    res.status(400).json(err);
  });
});

router.put('/:id', (req, res) => {
    // updates a tag's name by its `id` value, when given an id value as a parameter
  Tag.update(
    {
      tag_name:req.body.tag_name
    },
    {
      where: {
        id: req.params.id,
      },
    })
    .then((updatedTag) => {
      res.status(200).json(updatedTag);
  })
  .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // deletes tag with id identified in url parameter and then returns the deleted Tag information when tag was deleted successfully
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((deletedTag) => {
    res.json(deletedTag);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
