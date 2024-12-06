function fibonacci(n, result = [0, 1]) {
    if (n === 0) return [0]; // Basis kasus: hanya mengembalikan [0] jika n=0
    if (n === 1) return [0, 1].slice(0, n + 1); // Basis kasus: mengembalikan [0, 1] jika n=1
    
    if (result.length > n) return result.slice(0, n + 1); // Jika panjang array sudah cukup, berhenti
    
    // Tambahkan elemen Fibonacci berikutnya
    result.push(result[result.length - 1] + result[result.length - 2]);
    
    // Rekursi untuk memperpanjang array
    return fibonacci(n, result);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;