const _ = require('lodash');
var resdata = [
    {
        "name" : "Raju",
        "age"  : 25,
        "branch": "CSE"
    },
    {
        "name" : "Surya",
        "age"  : 26,
        "branch": "MCA"
    },
    {
        "name" : "Sekhar",
        "age"  : 23,
        "branch": "CSE"
    },
    {
        "name" : "Sony",
        "age"  : 23,
        "branch": "CSE"
    },
    {
        "name" : "Sunil",
        "age"  : 25,
        "branch": "Mtech"
    },
    {
        "name" : "Mahesh",
        "age"  : 25,
        "branch": "IT"
    }
    ];


function processData(input, id, subarr) {
    const sortedData = _.sortBy(input, id); //Include lodash module to sort Data
    var tmpArr = [];
    var index = 0;
    for (i = 0; i < sortedData.length; i++) {
        if (i == index) {
            tmpArr[index] = {};
            tmpArr[index][id] = sortedData[i][id];
            tmpArr[index][subarr] = [];
            tmpArr[index][subarr].push(sortedData[i]);

        } 
        else {
            if (sortedData[i - 1][id] == sortedData[i][id]) {
                tmpArr[index][subarr].push(sortedData[i]);
            } else {
                index++;
                tmpArr[index] = {};
                tmpArr[index][id] = sortedData[i][id];
                tmpArr[index][subarr] = [];
                tmpArr[index][subarr].push(sortedData[i]);
            }
        }

        if (i >= sortedData.length - 1) {
            return tmpArr;
        }
    }
}


var regionsArr = processData(resdata,'age','students'); //parameters1 - Data to process,       parameter2- key on which you want to group,               parameter3- Array Group Key Name 

console.log(JSON.stringify(regionsArr,4,2));







