import {Request,Response} from 'express'
import {Pet} from '../models/pet'
import {createactvMenu} from '../helpers/createactveMenu'

export const search=(req:Request,res:Response)=>{
    let query:string=req.query.q as string
    let list=Pet.getFromSearchName(query)
    
    if(!query){
        res.redirect('/')
        return 
    }
    res.render('pages/pages',{
            menu:createactvMenu(''),
            list,
            query
        })
}
