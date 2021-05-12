const getData = async (path, page) => {
  try {
    const response = await fetch(`https://swapi.dev/api/${path}/?page=${page}`);
    const res = await response.json();
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default getData;
