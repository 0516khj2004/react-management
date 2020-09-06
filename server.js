const express = require('express');
const bodyParser = require('body-parser');
const { request } = require('express');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send(
        [
            {
                'id': 1,
                'img': 'https://placeimg.com/64/64/1',
                'name': '구현진',
                'birthday': '960516',
                'gender': '여자',
                'job': '직딩',
            },
            {
                'id': 2,
                'img': 'https://placeimg.com/64/64/2',
                'name': '홍길동',
                'birthday': '960516',
                'gender': '여자',
                'job': '직딩',
            },
            {
                'id': 3,
                'img': 'https://placeimg.com/64/64/3',
                'name': '이순신',
                'birthday': '960516',
                'gender': '여자',
                'job': '직딩',
            },
        ]
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));
