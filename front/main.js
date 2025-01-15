const API_URL = "http://127.0.0.1:5000"; // URL da sua API

// Função para criar uma sala
document.getElementById("createRoomForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const roomName = document.getElementById("roomName").value;
    const roomDescription = document.getElementById("roomDescription").value;

    const response = await fetch(`${API_URL}/rooms`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: roomName, description: roomDescription }),
    });

    if (response.ok) {
        alert("Sala criada com sucesso!");
        loadRooms();
    } else {
        alert("Erro ao criar sala.");
    }
});

// Função para listar salas
async function loadRooms() {
    const response = await fetch(`${API_URL}/rooms`);
    const rooms = await response.json();

    const roomList = document.getElementById("roomList");
    roomList.innerHTML = "";
    rooms.forEach((room) => {
        const li = document.createElement("li");
        li.textContent = `Sala: ${room.name} - ${room.description || "Sem descrição"}`;
        roomList.appendChild(li);
    });
}

// Função para criar usuário
document.getElementById("createUserForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;

    const response = await fetch(`${API_URL}/users`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
    });

    if (response.ok) {
        alert("Usuário criado com sucesso!");
        loadUsers();
    } else {
        alert("Erro ao criar usuário.");
    }
});

// Função para listar usuários
async function loadUsers() {
    const response = await fetch(`${API_URL}/users`);
    const users = await response.json();

    const userList = document.getElementById("userList");
    userList.innerHTML = "";
    users.forEach((user) => {
        const li = document.createElement("li");
        li.textContent = `Usuário: ${user.username}`;
        userList.appendChild(li);
    });
}

// Carregar dados iniciais
loadRooms();
loadUsers();
