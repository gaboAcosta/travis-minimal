/**
 * Created by gabriel.acosta on 7/21/16.
 */
var expect = require('chai').expect;
var assert = require('chai').assert;
var sinon = require('sinon');
var mainApp = require('../src/app.js');

describe('This will be our first test', function(){
  it('Should pass', function(){
    var initMock = {init: sinon.spy()};
    mainApp.start(initMock);
    expect(initMock.init.called).to.equal(true);
  })
});
