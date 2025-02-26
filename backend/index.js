import express from "express"
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql";
const app = express()

const port = 3000

app.use(express.json());

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database: 'refer'
})


app.use(cors())
app.use(bodyParser.json())
app.get('/', (req, res) => {
}) 

app.post('/refer',(req,res)=>{
    const sql = "INSERT INTO `user`(`fname`, `lname`, `email`, `phone`, `username`, `refemail`, `refnumber`, `refid`) VALUES (?)";
    const values = [
        firstName,
        lastName,
        email,
        phoneNumber,
        referralUsername,
        referralEmail,
        referralPhone,
        referralId
    ];
    db.query(sql, values, (err, result) => {
        if (err) {
          console.error('Error inserting data into database:', err);
          return res.status(500).json({ message: 'Failed to submit data' });
        }
        console.log('Data inserted successfully:', result);
        return res.status(200).json({ message: 'Data submitted successfully' });
      });
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})