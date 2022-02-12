export async function getApiData() {
    const url = "https://rickandmortyapi.com/api";
  
    const res = await fetch(url)
      .then((r) => r.json())
      .catch((err) => {
        console.log(err);
      });
  
    return res;
  }
  
 