import axios from 'axios';

const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios, { delayResponse: 500 });

// api
mock.onGet('/shapes').reply(200, require('./shapes.json'));
