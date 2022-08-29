const exports = express('express')
const router = express.Router()

router.get('/userra',()=>{
    return res.render("index", { title: "Home Page" })
    })

router.get('/userra',(req,res)=>{
    return res.status(200).json({
        massage:"All Users"
    })
})

module.exports = router