const status = {
    SUCCESS:{
        code:200,
        msg:"success"
    },
    ERROR:{
        code:500,
        msg:"error"
    },
    LACK:{
        code:403,
        msg:"forbidden"
    },
    NONE:{
        code:404,
        msg:"nothing found"
    }
}

module.exports = status;