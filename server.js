const express = require('express');
require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist'));

app.listen(port, () => {
	console.log(`Приложение слушает порт: ${port}`);
});
