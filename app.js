const array = [0, 1, false, 2, undefined, '', 3, null, 'main'];

// hotfix

const compact = array.filter( function (el, index, array) {
    if (el)
        return true;
    else
        return false;
} );
console.log( array );

