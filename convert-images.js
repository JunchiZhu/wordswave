const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// 要转换的图片文件路径
const imagesToConvert = [
  {
    src: path.join(__dirname, 'src/assets/background.gif'),
    dest: path.join(__dirname, 'src/assets/background.webp')
  },
  {
    src: path.join(__dirname, 'src/assets/products/product_card_1.png'),
    dest: path.join(__dirname, 'src/assets/products/product_card_1.webp')
  },
  {
    src: path.join(__dirname, 'src/assets/backgrounds/industry-bg.jpg'),
    dest: path.join(__dirname, 'src/assets/backgrounds/industry-bg.webp')
  },
  {
    src: path.join(__dirname, 'src/assets/backgrounds/services-bg.jpg'),
    dest: path.join(__dirname, 'src/assets/backgrounds/services-bg.webp')
  },
  {
    src: path.join(__dirname, 'src/assets/backgrounds/company-bg.jpg'),
    dest: path.join(__dirname, 'src/assets/backgrounds/company-bg.webp')
  },
  {
    src: path.join(__dirname, 'src/assets/backgrounds/ai-software-bg.jpg'),
    dest: path.join(__dirname, 'src/assets/backgrounds/ai-software-bg.webp')
  },
  {
    src: path.join(__dirname, 'src/assets/backgrounds/contact-bg.jpg'),
    dest: path.join(__dirname, 'src/assets/backgrounds/contact-bg.webp')
  }
];

// 转换图片为WebP格式
async function convertImages() {
  for (const image of imagesToConvert) {
    try {
      // 检查文件是否存在
      if (!fs.existsSync(image.src)) {
        console.log(`文件不存在: ${image.src}`);
        continue;
      }

      const ext = path.extname(image.src).toLowerCase();
      
      // 对不同格式的图片使用不同的处理方法
      if (ext === '.gif') {
        // GIF需要特殊处理，保留动画
        await sharp(image.src, { animated: true })
          .webp({ quality: 80, effort: 6 })
          .toFile(image.dest);
      } else {
        // 普通图片转换
        await sharp(image.src)
          .webp({ quality: 80, effort: 6 })
          .toFile(image.dest);
      }
      
      console.log(`成功转换: ${image.src} -> ${image.dest}`);
      
      // 计算文件大小减少百分比
      const originalSize = fs.statSync(image.src).size;
      const webpSize = fs.statSync(image.dest).size;
      const reduction = ((originalSize - webpSize) / originalSize * 100).toFixed(2);
      
      console.log(`文件大小: ${(originalSize / 1024).toFixed(2)} KB -> ${(webpSize / 1024).toFixed(2)} KB (减少 ${reduction}%)`);
    } catch (error) {
      console.error(`转换错误 ${image.src}:`, error.message);
    }
  }
}

convertImages().then(() => {
  console.log('图片转换完成');
}).catch(err => {
  console.error('图片转换过程中发生错误:', err);
}); 