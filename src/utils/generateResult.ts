export const generateResult = (arr: any) => {
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    const feature = arr[i];
    const featureContent = feature.content;
    const options = feature.options.map((option: any) => option.content);

    result += `${i + 1}.${featureContent}: ${options.join(', ')} `;
  }

  return result;
};
