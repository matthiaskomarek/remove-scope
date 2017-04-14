import { removeScope } from '../lib/remove-scope';

describe('removeScope', () => {
	it('should not change unscoped strings', () => {
		expect(removeScope('test-package-name')).toBe('test-package-name');
	});

	it('should remove the scoped prefix', () => {
		expect(removeScope('@test/package-name')).toBe('package-name');
	});
});