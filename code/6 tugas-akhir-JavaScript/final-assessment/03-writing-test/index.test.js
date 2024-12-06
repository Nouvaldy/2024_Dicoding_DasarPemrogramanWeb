import { describe, it } from 'node:test';
import assert from 'node:assert';
import {sum} from './index.js';

describe('Penjumlahan', () => {
    it('seharusnya menjumlahkan dengan benar', () => {
        //Arrange
        const a = 1;
        const b = 1;

        //Action
        const actualValue = sum(a, b);

        //Assert
        const expectedValue = 2;
        assert.equal(actualValue, expectedValue);
    });
});