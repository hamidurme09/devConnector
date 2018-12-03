const isEmpty = value => 
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && Object.keys(value).length === 0) 

module.exports = isEmpty;








// const isEmpty = value => {
//     return (
//         value === undefined ||
//         value === null ||
//         (typeof value === 'object' && Object.keys(value).length === 0) ||
//         (typeof value === 'string' && Object.keys(value).length === 0) 
//     );
// };