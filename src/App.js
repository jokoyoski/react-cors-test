import logo from './logo.svg';
import './App.css';

function App() {
  const urltoFile = (url ,filename, mimeType) => {
    return (fetch(url)
        .then((res) => ( res.arrayBuffer()))
    )}
  urltoFile('https://i.ytimg.com/vi/99LGgmvwqeQ/maxresdefault.jpg', "okelanfa", 'image/jpeg')
      .then(async (file) => {
        console.log('oke')
        console.log(file)
      })
}

export default App;
