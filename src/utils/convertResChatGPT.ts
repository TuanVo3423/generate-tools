import { v4 as uuidv4 } from 'uuid';
export const ConvertResChatGPT = (res: string) => {
  // console.log('res:', JSON.stringify(res));
  const lines = res.split('\n');

  // Chuyển đổi thành cấu trúc dữ liệu yêu cầu
  const features = [];
  let currentFeature = null;

  for (const line of lines) {
    if (line.startsWith('+')) {
      // Tạo một đối tượng IFeature mới
      // const featureId = parseInt(line.substring(1), 10);
      const featureContent = line.substring(3);
      const newFeature = {
        id: uuidv4(),
        content: featureContent,
        options: [],
      };

      features.push(newFeature);
      currentFeature = newFeature;
    } else if (line.startsWith('-')) {
      // Thêm một đối tượng option vào currentFeature
      // const optionId = parseInt(line.substring(1), 10);
      const optionContent = line.substring(3);
      const newOption = {
        id: uuidv4(),
        content: optionContent,
      };

      if (currentFeature) {
        currentFeature.options.push(newOption as never);
      }
    }
  }
  return features;
};
