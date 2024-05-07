
import WebsocketServer from 'ws';


export default function setUpWebsocketServer() {
    const wss = new WebsocketServer.Server({ port: 8080 });

    wss.on('connection', (ws: WebSocket) => {
        ws.on('message', (message) => {
    
        });
    });
}