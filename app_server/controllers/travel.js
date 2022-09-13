const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));


// GET traveler view
const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' -Travel';
    rest.render('travel', {title: pageTitle, trips});
};

module.exports = {
    travel
}