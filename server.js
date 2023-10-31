const express = require('express');
const path = require('path');
const app = express();

// Указываем Express где находятся статические файлы
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
