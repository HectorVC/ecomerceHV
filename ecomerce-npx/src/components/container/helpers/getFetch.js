const productos = [
{id:'1',sabor:'oreo',precio:'15',stock:'31',},
{id:'2',sabor:'chocolate',precio:'15',stock:'12',},
{id:'3',sabor:'rompope',precio:'20',stock:'25',},
{id:'4',sabor:'cajeta',precio:'15',stock:'28',},

];


export const gfetch = new Promise ((resolve,reject) => {// try catch
    let condition = true

    if (condition) {
        setTimeout(() =>{
            resolve (productos)
        }, 3000)
    } else {
        reject ('400 not found')
    }
})