import { Base64 } from "js-base64";

export function slugify(str) {
  return Base64.encodeURI(str);
}

export function unslugify(slug) {
  return Base64.decode(slug);
}
