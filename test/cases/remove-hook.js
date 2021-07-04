'use strict';
const exitHook = require('../../index');
const stub = require('./stub');

const unsubOne = exitHook(cb => {
	setTimeout(() => {
		stub.called();
		cb();
	}, 50);
	stub.called();
});

exitHook(() => {
	stub.called();
});

unsubOne();

stub.addCheck(1);
