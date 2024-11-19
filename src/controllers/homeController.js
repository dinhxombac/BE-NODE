const express = require('express')

const getHomepage = (req, res) =>{
        res.render('hi.ejs')
}


const getABC = (req, res) =>{
    res.send('Hello World! ABC')
}
module.exports = {
    getHomepage,
    getABC
}