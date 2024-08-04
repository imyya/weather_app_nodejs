const express = require('express');
const router = express.Router();
router.get('/',(req,resp,next)=>{
    resp.status(200).json({
        message: 'Handling GET requests to /products'
    });

    }
);
router.post('/',(req,resp,next)=>{
    resp.status(200).json({
        message: 'Handling POST requests to /products'
    });

    }
);

router.get('/:productId',(req,resp,next)=>{
    const id = req.params.productId;
    if(id ==='special'){
        resp.status(200).json({
            message:'That;s the special id'
        })
    }    
    else {
        resp.status(200).json({
            message:'c just un id qlcl'
        })
    }  
    });

module.exports = router;