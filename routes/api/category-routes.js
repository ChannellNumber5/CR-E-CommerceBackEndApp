const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // finds all categories using the FindAll method and includes all product data
  try {
    const categoryData = await Category.findAll({
      include: [{model: Product}]
    });
    res.status(200).json(categoryData);
  } catch (err){
      res.status(500).json(err);
  }
});

router.get('/:id', (req, res) => {
  // find one category based on the id that is specified in the URL parameter
  try{
    const categoryData = await Category.findByPK(req.params.id, {
      include: [{model: Product }]
    });
  } catch (err){
      res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // creates a new category from a post body
  Category.create({
    category_name:res.body.category_name
  })
  .then((newCategory) => res.status(200).json(newCategory))
  .catch((err) => {
    res.status(400).json(err);
  });
});

router.put('/:id', (req, res) => {
  // updates a category pased on the URL parameter given
  Category.update(
    {
      category_name:req.body.category_name
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
});

router.delete('/:id', (req, res) => {
  // deletes a category by its `id` value, when the id value matches the URL parameter given
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((deletedCategory) => {
    res.json(deletedCategory);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
