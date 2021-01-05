import { expect } from '@jest/globals';
import showHealth from '../app';

test('should show `healthy` in health 90', () => {
  const result = showHealth({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});

test('should show `wounded` in health 50', () => {
  const result = showHealth({ name: 'Маг', health: 50 });
  expect(result).toBe('wounded');
});

test('should show `wounded` in health 40', () => {
  const result = showHealth({ name: 'Маг', health: 40 });
  expect(result).toBe('wounded');
});

test('should show `wounded` in health 15', () => {
  const result = showHealth({ name: 'Маг', health: 15 });
  expect(result).toBe('wounded');
});

test('should show `critical` in health 10', () => {
  const result = showHealth({ name: 'Маг', health: 10 });
  expect(result).toBe('critical');
});
