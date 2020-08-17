var express = require('express');
var router = express.Router();

const { getAllOrders, delOrder} = require('../service/orderServer');
const { addOrder,updateOrders } = require('../dao/ordersDao');
//个人
router.post('/updateOrders',async function(req,res,next){
    let msg = await updateOrders(req.body);
    res.send(msg)
})
// 获取所有订单
router.get('/getAllOders', async function(req, res, next) {
    let msg = await getAllOrders(req.query);
    if (msg.success) {
        res.send({
            data: msg.data,
            success: msg.success
        })
    } else {
        res.send({
            data: msg.data,
            success: msg.success
        })
    }
});

router.post("/delOrder", async function(req, res, next) {
    let msg = await delOrder(req.body);
    res.send(msg)

});
//个人
router.post("/addOrder",async function(req,res,next){
    const data = await addOrder(req.body);
    res.send('添加成功')
})
module.exports = router;