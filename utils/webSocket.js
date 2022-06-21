const ws = new WebSocket('wss://demo.piesocket.com/v3/channel_2?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self');

/* ws.onopen = () => {
    // connection opened
    console.log('connection open');
    ws.send(' fede test'); // send a message
};

 ws.onmessage = (e) => {
    // a message was received
    console.log(e.data);
};

ws.onerror = (e) => {
    // an error occurred
    console.log(e.message);
};

ws.onclose = (e) => {
    // connection closed
    console.log(e.code, e.reason);
}; */

export { ws }