import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('index.html', () => {
  it('should have a users table with a h1 header', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, function (err, window) {
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal('Users table');
      done();
      window.close();
    });
  });
});

