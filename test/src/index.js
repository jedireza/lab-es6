'use strict';
import Lab from 'lab';
import Code from 'code';
import FiveMath from '../../src/index.js';


let lab = exports.lab = Lab.script();


lab.experiment('Test', () => {
  lab.test('it does something', (done) => {
    var result = FiveMath.addFive(5);

    Code.expect(result).to.equal(10);

    done();
  });

  lab.test('it does something', (done) => {
    var result = FiveMath.subtractFive(5);

    Code.expect(result).to.equal(0);

    done();
  });
});
