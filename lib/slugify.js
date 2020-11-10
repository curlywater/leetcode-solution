import pinyin from "pinyin";
import vocaSlugify from "voca/slugify";

const slugifyHistory = {
  counter: 0,
  recordMap: new Map(),
  set(slug, str) {
    if (this.recordMap.has(slug)) {
      slug += `-${this.counter++}`;
    }
    this.recordMap.set(slug, str);
    return slug;
  },
  get(slug) {
    return this.recordMap.get(slug);
  },
};

export function slugify(str) {
  let slug = vocaSlugify(
    pinyin(str, {
      style: pinyin.STYLE_NORMAL,
    })
      .map((array) => array[0].replace(/^\-/, ""))
      .join("-")
  );

  return slugifyHistory.set(slug, str);
}

export function unslugify(slug) {
  return slugifyHistory.get(slug);
}
