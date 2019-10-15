const flight = require('./flight');

flight.setOrigin('London');
flight.setDestination('Kyiv');
flight.setNumber('554413');

console.log(flight.getInfo());