import Lab from 'lab';
import Code from 'code';
import DoSomething from '../../src/index.js';


let lab = exports.lab = Lab.script();


lab.experiment('Test', function () {
  lab.test('it does something', function (done) {
    var result = DoSomething.addSomething('do');

    Code.expect(result).to.equal('doSomething');

    done();
  });
});
