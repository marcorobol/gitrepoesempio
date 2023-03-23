const array = [0, 1, false, 2, undefined, '', 3, null];

// this
// array.forEach( function(v,i){
//     console.log(this)
// } );

const compact = array.filter( function (el, index, array) {
    if (el)
        return true;
    else
        return false;
} );
console.log( array );