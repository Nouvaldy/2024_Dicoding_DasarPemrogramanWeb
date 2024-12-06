function fibonacci(n) {
/*
Feedback: Basis rekursi sudah benar, namun perlu ditambahkan logika untuk
menyimpan dan mengembalikan deret Fibonacci dalam bentuk array.
*/
    if (n==0) {
        return 0;
    }

    if (n==1) {
        return 1;
    }
/*
Feedback: Fungsi rekursif ini hanya mengembalikan nilai Fibonacci ke-n,
bukan array yang berisi deret Fibonacci hingga angka ke-n.  Perlu dimodifikasi agar fungsi mengembalikan array.
*/
    return fibonacci(n-1) + fibonacci(n-2);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;

console.log(10);
/**
 * Output yang diharapkan:
 * * [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]
 */
