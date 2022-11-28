import Cookies from 'js-cookie';

export function getParsedCookie(key) {
  const cookieValue = Cookies.get(key); // type string or undefined

  if (!cookieValue) {
    return undefined;
  }
  try {
    return JSON.parse(cookieValue); // type should be a string
  } catch (err) {
    return undefined;
  }
}

export function setStringifiedCookie(key, value) {
  Cookies.set(key, JSON.stringify(value));
}
