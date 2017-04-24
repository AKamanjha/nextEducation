var numbersArr = [];
var score = {};
var tie = {
    students: []
};


// Takes input from command line as space seperated numbers and creates an array for the same
if (process.argv[2]) {

    process.argv.forEach(function (val) {
        numbersArr.push(parseInt(val));
    });

    numbersArr.forEach(function (x) {
        score[x] = (score[x] || 0) + 1;
    });


    function getKeyByValue(object, value, keyNot) {
        return Object.keys(object).filter(key => object[key] === value && key !== keyNot);
    }

    var winner = Object.keys(score).reduce(function (a, b) {
        return score[a] > score[b] ? a : b
    });

    var wasTied = getKeyByValue(score, score[winner], winner);

    if (wasTied.length > 0) {
        wasTied.push(winner);
        console.log("tied between ", wasTied.toString(), " with score ", score[winner]);
    } else {
        console.log(" Winner ", winner, " scored ", score[winner], " points");
    }

} else {
    console.log("Please enter command line value");
}




//********************************************Old program *****************************************/
//*************************************************************************************************/




// var numbersArr = [];

// // Takes input from command line as space seperated numbers and creates an array for the same
// process.argv.forEach(function(val, index, array){
// if(index > 1){
// numbersArr.push(parseInt(val));
// } 
// });

// (findMultOccNumSortArr)(numbersArr);

// function findMultOccNumSortArr(nums) {
//     var currentCount = 0,
//         prevCount = 0,
//         currentNum = 0,
//         prevNum = 0;

//     for (var i = 0; i < nums.length; i++) {
//         if ((nums[i] === 0 && i === 0) || (i === 0 && nums[i] !== 0)) {
//             currentNum = nums[i];
//             currentCount++;
//         } else if (nums[i] === currentNum) {
//             currentCount++;
//         } else {
//             if (prevCount < currentCount) {
//                 prevNum = currentNum;
//                 prevCount = currentCount;
//                 currentNum = nums[i];
//                 currentCount = 1;
//             } else {
//                 currentNum = nums[i];
//                 currentCount = 1;
//             }

//         } //else
//     } // for

//     if (prevCount < currentCount) {
//         console.log("Winner " + currentNum + " scored " + currentCount + " points");
//     } else {
//         console.log(" Winner " + prevNum + " scored " + prevCount + " points");
//     }
// } //findMultOccNumSortArr