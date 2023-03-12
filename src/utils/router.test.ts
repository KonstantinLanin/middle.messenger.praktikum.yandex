const expect = require('chai');
import { beforeEach } from 'mocha';
import Router from './router';

describe('Router', () => {
    let router: Router;

    beforeEach(() => {
        router = new Router();
    });

    it('Should change history length', () => {
        router.go('/test-1');
        router.go('/test-2');
        router.go('/test-3');
        router.go('/test-5');
        expect(router.history.length).to.eq(5);
    });
});
