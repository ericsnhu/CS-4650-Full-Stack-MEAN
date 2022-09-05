const index = (req, res) => {
    rest.render('index', { title: 'Travlr Getaways' });
};

module.exports = {
    index
}