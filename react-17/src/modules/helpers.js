export const getContentNameById = (id = '', list = []) => {
  if (!id && list.length === 0) return '';

  const { name = '' } = list.find((item) => id === item.id) || '';

  return name;
};
