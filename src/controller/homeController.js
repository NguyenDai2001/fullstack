import mysql from 'mysql2';
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'fullstack'
});




const handleHelloWorld = (req, res) => {
    const name = "Nguyen dai";
    return res.render('home.ejs', { name })
}
const homeUserPage = (req, res) => {
    return res.render('user.ejs')
}

const handleCreateNewUser = (req, res) => {
    console.log("checK: ", req.body)
    let email = req.body.emailName;
    let password = req.body.passwordName;
    let username = req.body.userName;


    connection.query(
        'INSERT INTO users(email,password,username) VALUES(?,?,?)', [email, password, username],
        function (err, results, fields) {
            console.log("check 1", results); // results contains rows returned by server
            console.log("check 2", fields); // fields contains extra meta data about results, if available
        }
    );


    return res.send("aaaaaaaa")
}




module.exports = {
    handleHelloWorld,
    homeUserPage,
    handleCreateNewUser
}