var assert = require('assert');
var hsb2rgb = require('../src/hsb2rgb');


describe('hsb2rgb', function () {
  it('should correctly convert arbitraty HSB colors to RGB', function () {
    assert.deepEqual(hsb2rgb(220, .43, .3), [ 44, 55, 77 ]);
  });

  it('should correctly convert grey-scale colors', function () {
    assert.deepEqual(hsb2rgb(0, 0, 0), [ 0, 0, 0 ]);
    assert.deepEqual(hsb2rgb(0, 0, .2), [ 51, 51, 51 ]);
    assert.deepEqual(hsb2rgb(0, 0, 1), [ 255, 255, 255 ]);

    assert.deepEqual(hsb2rgb(54, 0, 0), [ 0, 0, 0 ]);
    assert.deepEqual(hsb2rgb(54, 0, .2), [ 51, 51, 51 ]);
    assert.deepEqual(hsb2rgb(54, 0, 1), [ 255, 255, 255 ]);
  });

  it('should round RGB channel values', function () {
    assert.deepEqual(hsb2rgb(220, .43, .3), [ 44, 55, 77 ]);
    assert.deepEqual(hsb2rgb(0, 0, .5), [ 128, 128, 128 ]);
  });

  it('should allow percentage as the units', function () {
    assert.deepEqual(hsb2rgb(220, '43%', '30%'), [ 44, 55, 77 ]);
  });

  it('should allow degree units', function () {
    assert.deepEqual(hsb2rgb('220deg', .43, .3), [ 44, 55, 77 ]);
    assert.deepEqual(hsb2rgb('220°', .43, .3), [ 44, 55, 77 ]);
  });
});
