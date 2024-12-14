export function add(numA, numB) {
    if (typeof numA != 'number' || typeof numB != 'number'){
        throw new Error(`Mohon masukkan angka.`);
    }
    return numA + numB;
}