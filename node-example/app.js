const Express = require('express');
const app = new Express();
const connectDb = require("./database");
const User = require('./user.model');
const UserDto = require('./user.dto');

connectDb()

app.get('/', async (req, res) => {
    const databaseUser = await User.findOne({email: 'vlad131761250@gmail.com'})
    if (databaseUser)
        return res.status(200).json(new UserDto(databaseUser))
    else
        return res.status(404).json({message: 'Not Found'})
})

app.listen(9000);