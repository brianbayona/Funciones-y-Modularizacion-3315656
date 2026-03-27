for (let n = 2; n <= 50; n++) {
    let primo = true;
    for (let i = 2; i*i <= n; i++) {
        if (n % i === 0) { primo = false; break; }
    }
    if (primo) console.log(n);
}
