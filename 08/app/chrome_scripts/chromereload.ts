{
  'use strict';
  let LIVERELOAD_HOST, LIVERELOAD_PORT, connection;

  LIVERELOAD_HOST = 'localhost:';

  LIVERELOAD_PORT = 35729;

  connection = new WebSocket(`ws://${LIVERELOAD_HOST}${LIVERELOAD_PORT}/livereload`);

  connection.onerror = (error) => {
    return console.log('reload connection got error' + JSON.stringify(error));
  };

  connection.onmessage = (e) => {
    var data;
    if (e.data) {
      data = JSON.parse(e.data);
      if (data && data.command === 'reload') {
        return chrome.runtime.reload();
      }
    }
  };
}

