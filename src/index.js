/* $lab:coverage:off$ */
import Fs from 'fs';
import Path from 'path';
/* $lab:coverage:on$ */

class FiveMath {
  constructor() {
    this.something = true;
  }
  static addFive (value) {
    return value + 5;
  }
  static subtractFive (value) {
    return value - 5;
  }
}


export default FiveMath;
