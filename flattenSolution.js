
var array = [1,2,[3,4,[5]]]

console.log( array.flat() );

function flatten (array) {
    return array.reduce( (acc, v) => {
        console.log(acc, v);
        if ( Array.isArray(v) )
            return acc.concat( flatten(v) )
        else
            return acc.concat( v )
        // return acc.concat( Array.isArray(v) ? flatten(v) : v );
    }, [] )
}
console.log( flatten( array ) );

// /**
//  * @type {function([]):[]}
// */
// function flattenIterative (array) {
//     /** @type {function([]):boolean} */
//     let containArray = (ar) => {
//         return ar.find( x => Array.isArray(x) )
//     }
//     while ( containArray(array) ) {
//         array = array.flat()
//     }
//     return array
// }
// console.log( flattenIterative( array ) );
