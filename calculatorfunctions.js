/**
 * Created by deepak on 22/3/16.
 * 
 * It is just for reference purpose, this logic is of no use
 */
function add(x,y){
    return parseInt(x)+parseInt(y);
}

function sub(x,y){
    return parseInt(x)-parseInt(y);
}

function mul(x,y){
    return parseInt(x)*parseInt(y);
}

function div(x,y){
    return parseInt(x)/parseInt(y);
}

var calcObject = {
    add:function (x,y){
        return parseInt(x) + parseInt(y);
    },
    subtract :function (x,y){
        return x-y;
    }
}