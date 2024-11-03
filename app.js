const { default: axios } = require("axios");


const apiUrl = "http://137.184.108.252:5000/api";
const email = "analuizarodrigueschiamenti@gmail.com";
const password = "0P9j3nJXoK8A";

async function main() {
  const authResponse = await axios.post(`${apiUrl}/login`, {
    email,
    password
  });

  const token = authResponse.data.token;
  console.log("Token:", token);

  const citiesResponse = await axios.get(`${apiUrl}/cidades`, {
    headers: {
      "x-access-token": token
    }
  });

  const cities = citiesResponse.data;
  console.log("Cidades recebidas:", cities);
}

main();
