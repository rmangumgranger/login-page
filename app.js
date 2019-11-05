const dotenv = require('dotenv'),
    ex = require('express'),
    exLayouts = require('express-ejs-layouts'),
    app = ex(),
    db = require('pg');
//import environmental    
dotenv.config();
//ejs
app.use(exLayouts);
app.set('view engine', 'ejs')

const PORT = process.env.PORT || 5000
//routes 
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))
app.listen(PORT, console.log(`Listenign on port: ${PORT}`))

//https://youtu.be/6FOq4cUdH8k?t=1359