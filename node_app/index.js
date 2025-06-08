//  a simple node app that returns a json object with a message
import express from 'express';
const app = express();
const PORT = 3000;

app.get('/api/hello', (req, res) => {
    res.json({ message: "Hello from Node.js API" });
});

app.listen(PORT, () => {
    console.log(`Node API running on port ${PORT}`);
});
