const apiUrl = "http://137.184.108.252:5000/api";
const email = "analuizarodrigueschiamenti@gmail.com";
const password = "0P9j3nJXoK8A";

async function main() {
    const authResponse = await axios.post(`${apiUrl}/login`, {
        email,
        password
    });

    const token = authResponse.data.token;

    const citiesResponse = await axios.get(`${apiUrl}/cidades`, {
        headers: {
            "x-access-token": token
        }
    });

    const cities = citiesResponse.data;
    const citiesTableBody = document.getElementById("citiesTable").getElementsByTagName("tbody")[0];

    cities.forEach(city => {
        const row = citiesTableBody.insertRow();
        const idCell = row.insertCell(0);
        const nameCell = row.insertCell(1);

        idCell.textContent = city.id;
        nameCell.textContent = city.nome;
    });
}

document.addEventListener("DOMContentLoaded", main);
