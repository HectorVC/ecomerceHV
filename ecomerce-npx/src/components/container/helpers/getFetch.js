let productos = [
{id:'1',sabor:'Oreo',precio:'15',base:'Leche',img:'../img/6.jpg'},
{id:'2',sabor:'Chocolate',precio:'15',base:'Leche',},
{id:'3',sabor:'Rompope',precio:'20',base:'Agua',},
{id:'4',sabor:'Coco',precio:'15',base:'Agua',},

];


export const gFetch = new Promise ((resolve,reject) => {// try catch
    let condition = true

    if (condition) {
        setTimeout(() =>{
            resolve (productos)
        }, 3000)
    } else {
        reject ('400 not found')
    }
})
