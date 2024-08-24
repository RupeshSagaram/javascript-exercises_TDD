const findTheOldest = function(arr) {

    currentYear = new Date().getFullYear();
    let oldestPerson = arr.reduce((older, current) =>{

        let prevPerAge = (typeof older.yearOfDeath === 'undefined' ? currentYear : older.yearOfDeath) - older.yearOfBirth;
        let curPerAge = (typeof current.yearOfDeath === 'undefined' ? currentYear : current.yearOfDeath) - current.yearOfBirth;

        return prevPerAge > curPerAge ? older : current;
    
             
},0);
return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
