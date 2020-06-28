const {generateAuth, generateQuery} = require('../controllers/utils');

const auth = generateAuth();
// empty object because it will resort to default values
const query = generateQuery();

function generatePath(pathOne, pathTwo, id=false) {
    if(pathOne && pathTwo && id) {
        return `/marvel/${pathOne}/1/${pathTwo}?${auth}&${query}`;
    } else if(pathOne && id) {
        return `/marvel/${pathOne}/1?${auth}&${query}`;
    } else {
        return `/marvel/${pathOne}`;
    };
};

module.exports = {
    generatePath
};