const uri = 'http://192.168.0.106:3000/books';

const addBook = async book => {
  const apiurl = `${uri}.json`;
  const options = {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(book),
  };
  const resp = await fetch(apiurl, options);
  const response = await resp.json();
  return response;
};

const removeBook = async book => {
  const apiurl = `${uri}/${book.id}.json`;
  const options = {
    method: 'DELETE',
    mode: 'cors',
  };
  const resp = await fetch(apiurl, options);
  const response = await resp.json();
  return response;
};

const getBooks = async () => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const options = {
    method: 'GET',
    redirect: 'follow',
    mode: 'no-cors',
  };

  const resp = await fetch(uri, options);
  // const response = await resp.json();
  console.log(resp);
  return resp;
};

export { addBook, removeBook, getBooks };
