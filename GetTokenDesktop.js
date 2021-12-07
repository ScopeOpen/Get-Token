let popup;
    popup = window.open('', '', `top=0,left=${screen.width-800},width=850,height=150`);
    token = popup.localStorage.token // GET TOKEN  FROM DISCORD STORAGE
    token = token.slice(1, -1); // REMOVE QUOTATIONS