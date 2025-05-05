const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        const currentYear = new Date().getFullYear();
    
        const personDeath = person.yearOfDeath || currentYear;
        const personAge = personDeath - person.yearOfBirth;
    
        const oldestDeath = oldest.yearOfDeath || currentYear;
        const oldestAge = oldestDeath - oldest.yearOfBirth;
    
        return personAge > oldestAge ? person : oldest;
      });
};

// Do not edit below this line
module.exports = findTheOldest;
