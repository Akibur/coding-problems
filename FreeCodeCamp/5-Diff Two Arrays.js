/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, 
but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.

My Notes: 
The key to avoiding nested for loops is using dictionaries
*/


function diffArray(arr1, arr2) {
    let obj = {};
    var newArr = [];


    arr1.forEach(el => {

        obj[el] >= 1 ? obj[el] = obj[el] + 1 : obj[el] = 1;
    });


    arr2.forEach(el => {
        //let key = el.toString()
        obj[el] >= 1 ? obj[el] = obj[el] + 1 : obj[el] = 1;


    });

    console.log(obj);


    for (const key in obj) {
        if (obj[key] == 1) {
            console.log(typeof key);
            if (parseInt(key)) {
                newArr.push(parseInt(key));
                continue;
            }
            newArr.push(key);


        }
    }




    console.log(newArr);
    //return newArr;
}

//tests
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);