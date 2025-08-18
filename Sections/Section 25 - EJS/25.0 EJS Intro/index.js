import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const today = new Date();
    const day = today.getDay();

    let type = "a weekday";
    let adv = "get to work!";

    if (day === 0 || day === 6) {
        type = "the weekend";
        adv = "relax!";
    }

    res.render('index.ejs', {
        dayType: type, 
        advice: adv
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});