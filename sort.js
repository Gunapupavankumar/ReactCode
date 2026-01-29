
const arr =[1,2,3,[4,5,6],[7,8,9],10];
// prod changes
function flattenArray(array){
     let result =[];
     for(let i=0;i<array.length;i++){
        if(Array.isArray(array[i])){
            result = result.concat(flattenArray(array[i]));
        }else {
            result.push(array[i])
        }
     }
     return result
}

console.log(flattenArray(arr));