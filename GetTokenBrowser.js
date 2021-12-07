function getToken() {
    let popup;
    popup = window.open('', '', `top=0,left=${screen.width-800},width=850,height=150`);
    if(!popup || !popup.document || !popup.document.write) return alert('Popup blocked! Please allow popups and after you do so, rerun the code');
    window.dispatchEvent(new Event('beforeunload'));
    token = popup.localStorage.token // GET TOKEN  FROM DISCORD STORAGE
    token = token.slice(1, -1); // REMOVE QUOTATIONS
    popup.document.write(`
    <!DOCTYPE html>
    <html>
        <head>
     
            <title>Account Token (DISCORD)</title>
            <style>
                body {
                    font-family: sans-serif;
                    background: #0d7fe4;
                }
                
                code {
                    background: #202b38;
                    font-family: Consolas, serif;
                    padding: 7.5px;
                    border-radius: 7.5px;
                    margin-right: 5px;
                    color: white;
                }
    
                
                

h1 {
     color: rgb(255, 255, 255);
    color: var(--text-bright);
}
            </style>
        </head>
        <body>
            <h1 style="color:white">Token</h1>
            <code id="token_p"></code>
       
           
           
        </body>
    </html>
    `)


    popup.document.getElementById('token_p').innerHTML = token

}		
getToken()