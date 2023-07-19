const handleHelloWorld = (req, res) => {
    const name = "Nguyen dai";
    return res.render('home.ejs', { name })
}
const homeUserPage = (req, res) => {
    return res.render('user.ejs')
}

module.exports = {
    handleHelloWorld,
    homeUserPage
}