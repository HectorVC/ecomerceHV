let productos = [
{id:'1',sabor:'Oreo',precio:'15',stock:'31',},
{id:'2',sabor:'Chocolate',precio:'15',stock:'12',},
{id:'3',sabor:'Rompope',precio:'20',stock:'25',},
{id:'4',sabor:'Cajeta',precio:'15',stock:'28',},

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
