import express from 'express';
const router = express.Router();

//Item model
const Item= require('../../models/Item');

//@route GET api/items
//@dexc Get all items
//@access Public
router.get('/', (req,res)=>{
    Item.find()
        .sort({ date: -1})
        .then(items => res.json(items))
});

//@route POST api/items
//@desc Create a Post
//@access Public
router.post('/', (req,res)=>{
    const newItem= new Item({
        name: req.body.name
    });

    newItem.save()
           .then(item=> res.json(item))
});

//@route Delete api/items
//@desc Delete an item
//@access Public
router.delete('/:id', (req,res)=>{
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success:false}))
});

module.exports= router;