import {Request,Response} from 'express'
import {createactvMenu} from '../helpers/createactveMenu'
import {Pet} from '../models/pet'



export const home=(req:Request,res:Response)=>{
    let list=Pet.getAll()

        res.render('pages/pages', {
            menu:createactvMenu('all'),
            banner:{
            title:'Todos os animais',
            background:'natureza.jpg'
        },
        list
    })
       
       
}


export const dogs=(req:Request,res:Response)=>{
    let list=Pet.getFromFilter('dog')

    res.render('pages/pages', {
        menu:createactvMenu('dog'),
        banner:{
        title:'Cachorro',
        background:'banner_dog.jpg'
    },
    list
})
}


export const cats=(req:Request,res:Response)=>{
    let list=Pet.getFromFilter('cat')
    res.render('pages/pages', {
        menu:createactvMenu('cat'),
        banner:{
        title:'Gatos',
        background:'banner_cat.jpg'
    },
    list
})
   
}


export const fishes=(req:Request,res:Response)=>{

    let list=Pet.getFromFilter('fish')
    res.render('pages/pages', {
        menu:createactvMenu('fish'),
        banner:{
        title:'Peixes',
        background:'banner_fish.jpg'
    },
    list
})
    
}


