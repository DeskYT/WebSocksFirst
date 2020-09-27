const express = require('express');
const app = express();
const expressWS = require('express-ws')(app);
const gWss = expressWS.getWss('/');
app.use(express.json());
app.ws('/', function (ws, req) {
    ws.on('message', function (msg) {
        console.log(msg);
        //ws.send(msg);
        gWss.clients.forEach((client)=>{
            client.send(msg);
        })
    })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`App listening on port ${PORT}`));