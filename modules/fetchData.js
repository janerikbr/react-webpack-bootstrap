function fetchData() {
  return new Promise(resolve => {
    setTimeout(()=> {
      resolve({title: 'Server side fetched title'});
    }, 0);
  });
}

export default fetchData;
