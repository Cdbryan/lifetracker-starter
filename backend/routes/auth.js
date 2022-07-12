const express = require('express')
const router = express.Router()
const {createUserJwt} = require("../utils/tokens")
const security = require("../middleware/security")
const User = require("../models/user");

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})
// // define the home page route
// router.get('/', (req, res) => {
//   res.send('Birds home page')
// })
// // define the about route
// router.get('/about', (req, res) => {
//   res.send('About birds')
// })

router.post("/login", async (req, res, next) => {
  try {
    const user = await User.login(req.body);
    const token = createUserJwt(user);
    return res.status(200).json({ user, token });
  } catch (err) {
    next(err);
  }
});

router.post("/register", async (req, res, next) => {
  try {
    const user = await User.register({ ...req.body, isAdmin: false });
    const token = createUserJwt(user);
    return res.status(201).json({ user, token });
  } catch (err) {
    next(err);
  }
});

router.get("/me", security.requireAuthenticatedUser, async (req, res, next) => {
  try {
    const { email } = res.locals.user;
    const user = await User.fetchUserByEmail(email);
    const publicUser = User.makePublicUser(user);
    return res.status(200).json({ user: publicUser });
  }
  catch (err){
    next(err);
  }
});


// router
//     .route("/login")
//     .post((req, res, next) => {
//         const userObj = req.body;

//         if (!userObj.email || !userObj.pw) {
//             res.status(400).send("missing required fields");
//         } else {
//             const userFromDB = getUser(userObj.email);

//             if (!userFromDB) {
//                 res.status(400).send("no user account found");
//             } else {
//                 if (bcrypt.compareSync(userObj.pw, userFromDB.pw)) {
//                     res.status(200).send("login success");
//                 } else{
//                     res.status(400).send("bad pw");
//                 }
//             }
//         }
//     });

// router
//     .route("/register")
//     .post((req, res, next) => {
//         try {
//             const userObj = req.body;

//             if (!userObj.email || !userObj.pw) {
//                 res.status(400).send("missing required fields");
//             } else {
//                 const userFromDB = getUser(userObj.email);
//                 if(!userFromDB) {
//                     const hashedPw = bcrypt.hashSync(
//                         userObj.pw,
//                         10
//                     );
//                     const savedUser = saveUser(userObj.email. hashedPw);
//                     if(savedUser) {
//                         res.status(201).send(savedUser);
//                     }
//                 } else {
//                     res.status(400).send("user already exists");
//                 }
//             }
//         } catch (err) {
//             res.status(500).render("error.html")
//         }
//     })

// exports.getUser = async (email) => {
//     const res = await client
//         .query('select * from "user" where email=$1', [email]);
//     return res.rows[0];
// }
// exports.saveUser = async (newUser, hashedPw) => {
//     const res = await client
//         .query(
//             'insert into "user" values ($1,$2)',
//             [newUser.email, hashedPw]
//         )
//     return res.rows[0];
// }

module.exports = router