let estudiantes = 5;

for (let i = 1; i <= estudiantes; i++) {

    let carnet = i % 2; // 0 o 1

    if (carnet === 1) {
        console.log("puede entrar");
    } else {
        console.log("no puede entrar");
    }
}