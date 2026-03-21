import { describe, expect, it } from 'vitest';

describe('Sample test suite', () => {
	it('should pass a basic assertion', () => {
		expect(1 + 1).toBe(2);
	});

	it('should verify string equality', () => {
		const siteName = 'Zac Godfrey';
		expect(siteName).toBe('Zac Godfrey');
	});
});
