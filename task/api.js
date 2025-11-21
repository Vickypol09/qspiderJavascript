let Data = "https://api.github.com/users";
let tableBody = document.getElementById("tableBody");

async function getData() {
    let response = await fetch(Data);
    let result = await response.json();

    result.forEach(user => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${user.login}</td>
            <td><img src="${user.avatar_url}" height="80"></td>
        `;

        tableBody.appendChild(row);
    });
}

getData();
