/**
 * @jest-environment jsdom
 */
import getElementIndex from '../utils/abstracts.js';

describe('Abstract function', () => {
  describe('getElementIndex', () => {
    test('should get the index of a DOM element relative to the parent', () => {
      const parent = document.createElement('div');
      const child = document.createElement('span');
      parent.append(child);

      expect(getElementIndex(child)).toBe(0);
    });
  });
});