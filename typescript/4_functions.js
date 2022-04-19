function add(a, b) {
    return a + b;
}
function toUpperCase(str) {
    return str.trim().toUpperCase();
}
function position(a, b) {
    var string = 'dsfdsf';
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, "default": a.toString() };
    }
    return { x: a, y: b };
}
console.log('Empty: ', position()); // Empty:  { x: undefined, y: undefined }
console.log('One param:', position(42)); // One param: { x: 42, y: undefined, default: '42' }
console.log('Two params', position(10, 15)); // Two params { x: 10, y: 15 }
