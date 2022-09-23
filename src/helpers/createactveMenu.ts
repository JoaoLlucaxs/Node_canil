

type MenuOptions='' |'all' |'dog'|'cat'|'fish'

export const createactvMenu=(active:MenuOptions)=>{
    let returnObj={
        all:false,
        dog:false,
        cat:false,
        fish:false
    }

    if(active !==''){
        returnObj[active]=true
    }

    return returnObj
}