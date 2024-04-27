
const stringOps = {
    upperCaseString : (value) =>{
        return value.toUpperCase();
    },
    lowerCaseString : (value) =>{
        return value.toLowerCase();
    },
    removeNumber : (value) =>{
        return value.replace(/\d+/g, '');
    },
    removeSpecialChar : (value) =>{
        return value.replace(/[^a-zA-Z0-9]/g, '');
    }
}

const arrayOps = {
    uniqueArray : (array) => {
        return [...new Set(array)]
    },
    
    sortedNumArray : (array) =>{
        return array.sort((a,b)=>a-b)
    },

    sortedStrArray : (array) =>{
        return array.sort()
    },

    sumNumArray : (array) => {
        return array.reduce((acc,curr)=>{
            acc += curr;
            return acc
        },0)
    },

    uniqueArrOfObjWithId : (array,id) => {
        let obj = {}
        array.forEach((fres)=>
        obj[fres[id]] =fres
        )
        const finalArray = Object.values(obj)
        return finalArray
    },

    mergeArraysWithUniqueValues : (arrayOfArrays) =>{
        return  [...new Set(arrayOfArrays.flat())]
    },

    flattenArray : (array) =>{
        return array.flat(100)
    },

    arrayIncludes : (array,value) =>{
        return array.includes(value)
    },

    arrayRemoveValue : (array,value) => {
        let newArr = [];
         array.forEach((fres)=>{
            if(!value.includes(fres)){
                newArr.push(fres)
            }
        })
        return newArr;
    }
}

module.exports = {stringOps, arrayOps}