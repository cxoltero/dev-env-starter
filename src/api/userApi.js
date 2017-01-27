// use fetch for http calls
// TODO, for some reason port 8081 does not work on chrome, it works fine on firefox.
import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getUsers() {
  return get('/users');
}

export function deleteUser(id) {
  return del(`/users/${id}`);
}

function get(url) {
  url = baseUrl + url ;
  return fetch(url).then(onSuccess, onError);
}

function onSuccess(res) {
  return res.json();
}

function onError(err) {
  console.log(err); // eslint-disable-line no-console
}

function del(url) {
  url = baseUrl + url ;
  const req = new Request(url, {
    method: "DELETE",
    mode: "cors"
  });

  return fetch(req).then(onSuccess, onError);
}
