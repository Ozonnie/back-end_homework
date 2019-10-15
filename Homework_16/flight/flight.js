let number, origin, destination;

module.exports.setNumber = function(num){
    number = num;
};

module.exports.setOrigin = function(o){
    origin = o;
};

module.exports.setDestination = function(d){
    destination = d;
};

module.exports.getInfo = function(){
    return{
        number: number,
        origin: origin,
        destination: destination
    };
};