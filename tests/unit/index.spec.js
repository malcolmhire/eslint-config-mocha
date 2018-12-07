const chai = require('chai');

const { expect } = chai;

const eslintConfig = require('../../src/index');

describe('@dwp/eslint-config-mocha', () => {
  it('the entrypoint should export an object', () => {
    expect(eslintConfig).to.be.an('Object');
  });

  describe('the exported object should', () => {
    it('have a plugins key', () => {
      expect(Object.keys(eslintConfig)).to.contain('plugins');
    });

    it('have an extends key', () => {
      expect(Object.keys(eslintConfig)).to.contain('extends');
    });

    it('have a globals key', () => {
      expect(Object.keys(eslintConfig)).to.contain('env');
    });

    it('have a rules key', () => {
      expect(Object.keys(eslintConfig)).to.contain('rules');
    });

    it('not have any other keys', () => {
      expect(Object.keys(eslintConfig)).to.deep.equal(['plugins', 'extends', 'env', 'rules']);
    });

    describe('the extends key should ', () => {
      const rule = eslintConfig.extends;

      it('inherit recommended settings', () => {
        expect(rule).to.deep.equal(['plugin:eslint-plugin-mocha/recommended']);
      });
    });

    describe('the env key should', () => {
      const rule = eslintConfig.env;

      it('be an object', () => {
        expect(rule).to.be.an('Object');
      });

      it('have a mocha key', () => {
        expect(Object.keys(rule)).to.contain('mocha');
      });

      it('not have any other keys', () => {
        expect(Object.keys(rule)).to.deep.equal(['mocha']);
      });

      describe('the mocha key should ', () => {
        it('be enabled', () => {
          expect(rule.mocha).to.equal(true);
        });
      });
    });

    describe('the rules key should ', () => {
      const { rules } = eslintConfig;

      it('be an object', () => {
        expect(rules).to.be.an('Object');
      });
    });
  });
});
