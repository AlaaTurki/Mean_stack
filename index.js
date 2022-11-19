//utiliser le module express
var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var User = require('./Models/User');
var cors = require('cors');
var app = express();


var db = mongoose.connect('mongodb://localhost:27017/authAngular',
    function (err, response) {
        if (err)
            console.log("erreur de connexion avec mongodb");

        console.log("connexion avec succès");
    })


app.use(cors());


//utiliser le port 3000 
app.set('port', process.env.port || 3000);
app.use(bodyparser.json());
//afficher liste des utilisateurs
app.get('/Users', async (req, res) => {
    try {
        await User.find({})
            .then(result => {
                res.send(result)
            })

    }
    catch (err) {
        console.log(err)
    }

})

//ajouter utilisateur
app.post("/ajouter_user", async (req, res) => {
    try {
        let new_user = new User({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password,
        });
        await new_user.save();
        res.send("save avec succès");
    }
    catch (err) {
        console.log(err);
    }

});

//supprimer user

app.delete("/supprimer/:id", async (req, res) => {
    try {
        await User.findOneAndDelete({ id: req.params.id })
        res.send("supprimé avec succès")

    }
    catch (err) {
        console.log(err);
    }

});

// //modifier user
// app.put("/modifier/:id",async(req,res)=>{
//     try{
//         await User.findOneAndUpdate({id:req.params.id},req.body)
//         res.send("modifié avec succès")

//     }
//     catch(err){
//         console.log(err);
//     }

// });




//configurer le route et afficher hello dans la page racine
app.get('/', (req, res) => {
    res.send("hello");
})

// //register
// app.post('/register',(req,res)=>{
//     var firstname=req.body.firstname
//     var lastname=req.body.lastname
//     var email=req.body.email
//     var password=req.body.password
// })

//register

app.post('/register', (req, res) => {
    console.log(req.body);

    var firstname = req.body.firstname
    var lastname = req.body.lastname
    var email = req.body.email
    var password = req.body.password

    var user = new User();
    user.firstname = firstname;
    user.lastname = lastname;
    user.email = email;
    user.password = password;

    user.save((err, result) => {
        if (err) {
            console.log("erreur lors de l'ajoute d'un user dans database");
            res.sendStatus(500);
        }
        res.sendStatus(200);
    })
app.post('/register',(req,res)=>{
        console.log(req.body);
    
        var firstname=req.body.firstname
        var lastname=req.body.lastname
        var email=req.body.email
        var password=req.body.password
    
        var user=new User();
        user.firstname=firstname;
        user.lastname=lastname;
        user.email=email;
        user.password=password;
    
        user.save();
        res.sendStatus(200).send();

    })
})

//login ---------------------------
app.post('/login', (req, res, next) => {
    console.log(req.body);
    var email = req.body.email;
    var password = req.body.password;
    User.findOne
    ({ email: email }, (err, user) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
        }
        if (!user) {
            res.status(401).send('Invalid email');
        }
        else
            if (user.password !== password) {
                res.status(401).send('Invalid password');
            }
            else {
                res.status(200).send(user);
            }
    });
});

//login win decrecated password
// app.post('/login', (req, res, next) => {
//     console.log(req.body);
//     var email = req.body.email;
//     var password = req.body.password;
//     User.findOne
//         ({
//             email
//                 : email
//         }, (err, user) => {
//             if (err) {
//                 console.log(err);
//                 res.sendStatus(500);
//             }
//             if (!user) {
//                 res.status(401).send('Invalid email');

//             }
//             else

//                 if (user.password !== password) {
//                     res.status(401).send('Invalid password');

//                 }
//                 else {
//                     res.status(200).send(user);
//                 }
//         });
// });


// //Showing login form
// app.get("/login", function (req, res) {
//     res.render("login");
// });

// //Handling user login
// app.post("/login", passport.authenticate("local", {
//     successRedirect: "/secret",
//     failureRedirect: "/login"
// }), function (req, res) {
// });

// //Handling user logout
// app.get("/logout", function (req, res) {
//     req.logout();
//     res.redirect("/");
// });

// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect("/login");
// }



//écouter le port
app.listen(app.get('port'), function (err, response) {
    console.log("server is running on port", app.get('port'));
});
