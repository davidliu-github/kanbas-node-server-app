export default function Hello(app) {

    app.get('/hello', (req, res) => {
      res.send('Hello!')
    });
    app.get('/', (req, res) => {
      res.send('Welcome to Webdev!')
    });
    
    }