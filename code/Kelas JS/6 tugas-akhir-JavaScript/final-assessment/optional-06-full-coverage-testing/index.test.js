import { describe, it } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

describe('Penjumlahan', () => {
    it('seharusnya menjumlahkan bilangan positif dengan benar', () => {
        //Arrange
        const a = 1;
        const b = 1;

        //Action
        const actualValue = sum(a, b);

        //Assert
        const expectedValue = 2;
        assert.equal(actualValue, expectedValue);
    });

    it('seharusnya mengeluarkan nilai nol kalau parameter a diberi nilai selain angka', () => {
        //Arrange
        const a = '1';
        const b = 1;

        //Action
        const actualValue = sum(a, b);

        //Assert
        const expectedValue = 0;
        assert.equal(actualValue, expectedValue);
    });

    it('seharusnya mengeluarkan nilai nol kalau parameter b diberi nilai selain angka', () => {
        //Arrange
        const a = 1;
        const b = '1';

        //Action
        const actualValue = sum(a, b);

        //Assert
        const expectedValue = 0;
        assert.equal(actualValue, expectedValue);
    });

    it('seharusnya mengeluarkan nilai nol kalau parameter a diberi angka negatif', () => {
        //Arrange
        const a = -5;
        const b = 1;

        //Action
        const actualValue = sum(a, b);

        //Assert
        const expectedValue = 0;
        assert.equal(actualValue, expectedValue);
    });

    it('seharusnya mengeluarkan nilai nol kalau parameter b diberi angka negatif', () => {
        //Arrange
        const a = 1;
        const b = -5;

        //Action
        const actualValue = sum(a, b);

        //Assert
        const expectedValue = 0;
        assert.equal(actualValue, expectedValue);
    });
});