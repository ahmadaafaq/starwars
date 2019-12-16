import axios from 'axios';

let apiURL = 'https://swapi.co/api/people';
const getDetail = (userData, callback, setStartLogin) => {
  axios.get(apiURL).then(response => {
    showDetail(response.data, userData, callback, setStartLogin);
  });
}

const showDetail = (data, userData, callback, setStartLogin) => {
  const nameArray = [];
  for (let i = 0; i < data.results.length; i++) {
    nameArray.push(data.results[i].name);
  }
  if (nameArray.includes(userData.username)) {
    const namePos = nameArray.indexOf(userData.username);
    if (data.results[namePos].birth_year === userData.password) {
      callback(true);
      return true;
    }
    else {
      window.alert('Wrong Password');
      setStartLogin(false);
      return false;
    }
  }
  else {
      window.alert('Wrong Username!! Please Check And Try Again');
      setStartLogin(false);
      return false;
  }
}

const submit = (values, callback, setStartLogin) => {
  apiURL = `${apiURL}?search=${values.username}`;
  getDetail(values, callback, setStartLogin);
}

export default submit;
