interface Entry {
  id: string;
  title: string;
  url: string;
  format: 'video';
};

export const learningMaterialEntries: Array<Entry> = [
  {
    id: 'destroy-all-software',
    title: 'Destroy All Software',
    url: 'https://www.destroyallsoftware.com/screencasts/catalog/functional-core-imperative-shell',
    format: 'video',
  },
  {
    id: 'goto-conferences',
    title: 'goto; Conferences',
    url: 'https://www.youtube.com/channel/UCs_tLP3AiwYKwdUHpltJPuA',
    format: 'video',
  },
  {
    id: 'ndc-conferences',
    title: 'NDC Conferences',
    url: 'https://www.youtube.com/channel/UCTdw38Cw6jcm0atBPA39a0Q',
    format: 'video',
  },
];
