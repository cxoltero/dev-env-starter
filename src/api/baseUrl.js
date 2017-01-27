export default function getBaseUrl(){
  return getQueryStringParameterByName('useMockAPI') ? 'http://localhost:8081' : 'https://calm-wave-83171.herokuapp.com';
}

function getQueryStringParameterByName(name, url) {
  console.log(window.location.href);
  if(!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if(!results) return null;
  if(!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
