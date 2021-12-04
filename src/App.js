import axios from 'axios';
import './App.css';

const options = {
  results: 10,
  page: 1,
  seed: 'abc',
}

function loadUsers({results, page, seed}){
  fetch(`https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`).then((response) => response.json()).then(({results}) => console.dir(results)).then((error) => console.log(error));
}

function loadUsersAxio ({results, page, seed}){
  (axios.get(`https://randomuser.me/api/?results=${results}&seed=${seed}&page=${page}`)).then((response) => console.log(response.data.results)).catch((error) => console.log(error));
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
