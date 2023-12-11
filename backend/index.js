import http from 'http';
import express from 'express'
import cors from 'cors'

const app = express();
const port = 1337

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: '*', 
}));

const server = http.createServer(app);

// if ya using db hashing etc can be done here :D 
const user = { id: 1, name: 'tester', password: 'test123', role: 'test-admin', token: 'its-mytoken-123'}

app.post('/auth/login', async (req, res) => {
    const { username, password } = req.body

    if (user.name === username && user.password === password) {
        return res.status(200).json(user)
    } else {
        return res.status(401) // careful if u return res.status(500 / 404 / etc anything diff then 401 ).json('random stuff here as json') the next auth will logg you
        // it will use the .json('') stuff to populate the user object even if its a string :D u can try it out
    }

})

server.listen(port, () => {
    console.log(`Backend server is running on port: ${port}`)
})