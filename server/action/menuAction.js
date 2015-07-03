/* 
 * @Author: chenhao
 * @Date:   2015-06-11 14:33:36
 * @Last Modified by:   chenhao
 * @Last Modified time: 2015-07-03 13:56:09
 */
var express = require('express');
var menuService = require('../service/menuService.js');
var router = express.Router();

//加载菜单
router.post("/menu/queryByUserId", function(req, res) {
    var data = req.body;
    menuService.queryByUserId(data, function(err, results) {
        if (err) {
            return;
        }        
        res.json(results);
    });
});

//查询菜单
router.post("/menu/query", function(req, res) {
    var data = req.body;
    menuService.query(data, function(err, results) {
        if (err) {
            return;
        }        
        res.json(results);
    });
});

//新增菜单
router.post("/menu/insert", function(req, res){
    var data = req.body;
    menuService.insert(data, function(err){
        if(err){
            res.json({msg: '新增失败'});
            return;
        }
        res.json({msg: '新增成功'});
    });
});

//更新菜单
router.post("/menu/update", function(req, res){
    var data = req.body;
    menuService.update(data, function(err){
        if(err){
            res.json({msg: '修改失败'});
            return;
        }
        res.json({msg: '修改成功'});
    });
});

//删除菜单
router.post("/menu/delete", function(req, res){
    var data = req.body;
    menuService.delete(data, function(err){
        if(err){
            res.json({msg: '删除失败'});
            return;
        }
        res.json({msg: '删除成功'});
    });
});


module.exports = router;