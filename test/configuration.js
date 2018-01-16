'use strict';

/**
 * Configure path
 */
const path = require('path');
global.FLUID_SOURCE = path.resolve(__dirname + '/../source');
global.FLUID_FIXTURES = path.resolve(__dirname + '/__fixtures__');
global.FLUID_TEST = __dirname;


/**
 * Configure chai
 */
const chai = require('chai');
chai.config.includeStack = true;
global.expect = chai.expect;
