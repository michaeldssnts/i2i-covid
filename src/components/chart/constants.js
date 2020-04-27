const colorsSchema = [
  '#2F939C',
  '#97C9CE',
  '#001D22',
  '#EDC72F',
  '#F95E31',
  '#6A51A3',
  '#B69FF4',
  '#9ED400',
  '#41AB5D',
  '#A01200',
  '#004529',
  '#96E4EF',
  '#006FDA',
  '#F4A3A8',
  '#737373',
];

export const colors = (n) => {
  return colorsSchema[n % colorsSchema.length];
};
