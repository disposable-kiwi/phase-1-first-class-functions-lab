// Code your solution in this file!
const returnFirstTwoDrivers = (array) => [array[0],array[1]];

const returnLastTwoDrivers = (array) => [array[array.length-2],array[array.length-1]];

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return (fare)=>{
            return fare*multiplier;
    };
}

const fareDoubler = (fareToDouble) =>{
    return createFareMultiplier(2)(fareToDouble);
};

const fareTripler = (fareToTriple) =>{
    return createFareMultiplier(3)(fareToTriple);
};

const selectDifferentDrivers = (drivers, callback) => {
    return callback(drivers);
};
