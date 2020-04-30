import getLevel from '../hero-level';
import fetchData from '../http';

jest.mock('../http');
beforeEach(() => {
  jest.resetAllMocks();
});
test('should get mocked url', () => {
  fetchData.mockReturnValue({});
  getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
});

test('should get bad response', () => {
  fetchData.mockReturnValue({});

  expect(getLevel(1)).toBe('Информация об уровне временно недоступна');
});

test('should get good response', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 5 });

  expect(getLevel(1)).toBe('Ваш текущий уровень: 5');
});
