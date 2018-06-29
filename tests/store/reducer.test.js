import { expect } from 'chai';

import reducer, * as actions from 'src/store/reducer';

/* eslint-disable */
describe('Reducer', () => {
  describe('Generalities', function() {
    it('should be a function', () => {
      expect(reducer).to.be.a('function');
    });

    it('should return an object', () => {
      expect(reducer()).to
        .be.an('object');
    });

    it('should have at least "view" and "lang" properties', () => {
      const state = reducer(); // default state
      expect(state).to.have.property('view');
      expect(state).to.have.property('lang');
    });
  });

  describe('Action creators', function() {
    describe('changeView', () => {
      it('should be a function', () => {
        expect(actions.changeView).to.be.a('function');
      });

      it('should return an action-compliant object', () => {
        expect(actions.changeView()).to
          .be.an('object')
          .which.has.a.property('type')
          .which.is.equal('CHANGE_VIEW');
      });
    });

    describe('changeLang', () => {
      it('should be a function', () => {
        expect(actions.changeLang).to.be.a('function');
      });

      it('should return an action-compliant object', () => {
        expect(actions.changeLang()).to
          .be.an('object')
          .which.has.a.property('type')
          .which.is.equal('CHANGE_LANG');
      });
    });

    describe('changeInput', () => {
      it('should be a function', () => {
        expect(actions.changeInput).to.be.a('function');
      });

      it('should return an action-compliant object', () => {
        const payload = {
          name: 'test',
          value: 'salut',
        };
        const action = actions.changeInput(payload);

        expect(action).to
          .be.an('object')
          .which.has.a.property('type')
          .which.is.equal('INPUT_CHANGE');

        expect(action).to
          .be.an('object')
          .which.has.a.property('name')
          .which.is.equal('test');

        expect(action).to
          .be.an('object')
          .which.has.a.property('value')
          .which.is.equal('salut');
      });
    });
  });

  describe('Action processing', () => {
    it('should alter/add "view" when dispatching "changeView"', () => {
      const action = actions.changeView('test');
      const state = { hello: 'world' };
      const newState = reducer(state, action);

      expect(newState).to
        .be.an('object')
        .which.has.a.property('view')
        .which.is.equal('test');

      expect(newState).to
        .be.an('object')
        .which.has.a.property('hello')
        .which.is.equal('world');
    });

    it('should alter/add "lang" when dispatching "changeLang"', () => {
      const action = actions.changeLang('test');
      const state = { hello: 'world' };
      const newState = reducer(state, action);

      expect(newState).to
        .be.an('object')
        .which.has.a.property('lang')
        .which.is.equal('test');

      // Doh, répétition…
      expect(newState).to
        .be.an('object')
        .which.has.a.property('hello')
        .which.is.equal('world');
    });

    it('should add the relevant key/value pair when dispatching "changeInput"', () => {
      const payload = { name: 'test', value: 'salut' }
      const action = actions.changeInput(payload);
      const state = { hello: 'world' };
      const newState = reducer(state, action);

      expect(newState).to
        .be.an('object')
        .which.contains.keys('hello', 'test');
      expect(newState.hello).to.equal('world');
      expect(newState.test).to.equal('salut');
    });

    it('should alter the relevant key/value pair when dispatching "changeInput"', () => {
      const payload = { name: 'email', value: 'test@unitaire.net' }
      const action = actions.changeInput(payload);
      const state = { email: 'jd@oclock.io' };
      const newState = reducer(state, action);

      expect(newState).to.contain.keys('email');
      expect(newState.email).to.equal('test@unitaire.net');
    });
  });
});
