import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(() => {
    service = new StorageService();
    localStorage.clear();
  });

  describe('set', () => {
    it('should set an item in localStorage', () => {
      const key = 'testKey';
      const value = { foo: 'bar' };

      service.set(key, value);

      const storedValue = localStorage.getItem(key);
      expect(storedValue).toBe(JSON.stringify(value));
    });
  });

  describe('get', () => {
    it('should get an item from localStorage', () => {
      const key = 'testKey';
      const value = { foo: 'bar' };
      localStorage.setItem(key, JSON.stringify(value));

      const result = service.get<{ foo: string }>(key);
      expect(result).toEqual(value);
    });

    it('should return null if the item does not exist', () => {
      const result = service.get<{ foo: string }>('nonExistentKey');
      expect(result).toBeNull();
    });

    it('should return null if there is an error parsing JSON', () => {
      const key = 'testKey';
      localStorage.setItem(key, 'invalid json');

      const result = service.get<{ foo: string }>(key);
      expect(result).toBeNull();
    });
  });

  describe('exists', () => {
    it('should return true if the item exists', () => {
      const key = 'testKey';
      localStorage.setItem(key, 'value');

      const result = service.exists(key);
      expect(result).toBe(true);
    });

    it('should return false if the item does not exist', () => {
      const result = service.exists('nonExistentKey');
      expect(result).toBe(false);
    });
  });

  describe('delete', () => {
    it('should delete an item from localStorage', () => {
      const key = 'testKey';
      localStorage.setItem(key, 'value');

      service.delete(key);

      const result = localStorage.getItem(key);
      expect(result).toBeNull();
    });
  });

  describe('clear', () => {
    it('should clear all items from localStorage', () => {
      localStorage.setItem('key1', 'value1');
      localStorage.setItem('key2', 'value2');

      service.clear();

      expect(localStorage.getItem('key1')).toBeNull();
      expect(localStorage.getItem('key2')).toBeNull();
    });
  });
});
