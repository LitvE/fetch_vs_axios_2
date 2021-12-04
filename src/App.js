import axios from 'axios';
import './App.css';

const options = {
  results: 10,
  page: 1,
  seed: 'abc',
}
/*
function loadUsers({results, page, seed}){
  fetch(`https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`).then((response) => response.json()).then(({results}) => console.dir(results)).then((error) => console.log(error));
}*/

function loadUsers({results, page, seed}){
  fetch(`https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`)
  .then((response) => {
    if(!response.ok) throw new Error(response.statusText);
    response.json();
  })
  .then(({results}) => console.dir(results))
  .catch((error) => console.log(error));
}

const configAxios = {
  onUploadProgress: event => console.log(event.loaded),
  onDownloadProgress: event => console.log(event.loaded),
  timeout: 2000,
}

function loadUsersAxio ({results, page, seed}){
  (axios.get(`https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`, configAxios))
  .then((response) => console.log(response.data.results))
  .catch((error) => console.log(error.message));
}

function App() {
  //loadUsers(options);
  loadUsersAxio(options);

  return (
    <div className="App">
      <p>Load data from randomuser</p>
    </div>
  );
}

export default App;
