export default function fetchData(url) {
  if (url === '') {
    throw new Error('Mock this!');
  }
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);
  xhr.send();
  return xhr;
}
