const express = require("express");
const app = express();
const corse = require('cors');
const bodyParser = require('body-parser');
const mysql = require("mysql");

const db = mysql.createPool({
    user: "rohin",
    host: "song-requests-database.cnld82kz5dpe.us-east-1.rds.amazonaws.com",
    password: "isthegoat",
    port: 3306,
    database: "SONG_REQUESTS"
});

app.use(corse());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))

app.get("/songGet", (req, res) => {
    const sql = "SELECT * FROM REQUESTS";
	db.query(sql, (err, result) => {
		res.send(result)
	});
});

app.post("/songInsert", (req, res) => {
    const song = req.body.song;
    const artist = req.body.artist;

    const sqlAdd = "INSERT INTO REQUESTS (SONG, ARTIST) VALUES (?, ?)";
    db.query(sqlAdd, [song, artist], function (err, result) {
        if (err) throw err;
        console.log("Entry Made");
        res.status(201).send();
    });
});

app.post("/songDelete", (req, res) => {
    const song = req.body.song;
    const artist = req.body.artist;
    
    const sqlAdd = "DELETE FROM REQUESTS WHERE SONG=? and ARTIST=?";
    db.query(sqlAdd, [song, artist], function (err, result) {
        if (err) throw err;
        console.log("Entry Deleted");
        res.status(201).send();
    });
});

app.listen(3001, () => {
    console.log("Running on port 3001");
})