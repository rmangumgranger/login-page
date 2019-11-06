const dotenv = require('dotenv'),
    ex = require('express'),
    exLayouts = require('express-ejs-layouts'),
    app = ex(),
    db = require('pg');
//import environmental    
dotenv.config();
const PORT = process.env.PORT || 5000
const connect = process.env.CONNECT
const pool = new db.Pool({
    connectionString: connect
})

//ejs
app.use(exLayouts);
app.set('view engine', 'ejs')
//bodyparsers
app.use(ex.urlencoded({
    extended: false
}));


/*app.get('/', (req, res) => {
    console.log('someone is connecting!')
    pool.connect((err, client, done) => {
        if (err) {
            res.sendStatus(500);
            return console.error(`error fetching client from pool: ${err}`);
        }
        client.query('SELECT * FROM accounts', (err, result) => {

            if (err) {
                return console.error(`error running query: ${err}`);
            }
            res.send(
                result
            )
            done();
        })
    })
})
*/
//connect to db
pool.connect((err, client, done) => {
    if (err) {
        res.sendStatus(500);
        return console.error(`error fetching client from pool: ${err}`);
    }
    console.log('DB Connected')
})

//routes 
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))
app.listen(PORT, console.log(`Listening on port: ${PORT}`))

//https://youtu.be/6FOq4cUdH8k?t=2188