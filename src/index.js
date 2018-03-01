module.exports = function getZerosCount(number, base) {
var zero = number;
var systemBase = base;
var power;
var k;
for (var i = 2; i <= base; i++){
    if (systemBase % i === 0){
        power = 0;
        while (systemBase % i === 0){
            power++;
            systemBase = Math.floor(systemBase/i);
        }
    var count = 0;
    k = number;
    do {
        count += Math.floor(k/i);
        k = Math.floor(k/i);
    } while (k != 0);
    zero = Math.min(zero, Math.floor(count/power));
    }
}
return zero
}