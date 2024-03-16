const express = require('express')
const { faker } = require('@faker-js/faker')

const router = express.Router();

router.get('/', (req, res) => {
    const products = [];
    const { size } = req.query;
    const limit = size || 10;
    for (let i = 0; i < limit; i++) {
        products.push({
            name: faker.commerce.productName(),
            price: faker.commerce.price()
        });
    }
    res.json(products);
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    if (id == '999') {
        res.status(400).json({
            message: 'invalid data',
            id
        });
    } else {
        res.json({
            id,
            name: faker.commerce.productName(),
            price: faker.commerce.price()
        })
    }
})

router.post('/', (req, res) => {   
    const body = req.body;
    res.json({
        message: 'created',
        data: body
    });
});


router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'updated',
        data: body,
        id
    });
    
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'deleted',
        id
    });
});


module.exports = router;
