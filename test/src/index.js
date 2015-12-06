import Lab from 'lab';
import Code from 'code';
import DoSomething from '../../src/index.js';


let lab = exports.lab = Lab.script();


lab.experiment('Test', () => {
  lab.test('it does something', (done) => {
    var result = DoSomething.addSomething('do');

    Code.expect(result).to.equal('doSomething');

    done();
  });
});
