const puppeteer = require('puppeteer');
const fs = require('fs');
const axios = require('axios');
const ProgressBar = require('progress');

const downloadImage = async (imageUrl, downloadDirectory, progressBar) => {
  const startTime = Date.now();
  try {
    const response = await axios.get(imageUrl, { responseType: 'stream' });
    const regexFileName = /\/([^/]+\.(jpg|png|gif))$/i;
    const matchesFileName = imageUrl.match(regexFileName);

    if (matchesFileName && matchesFileName.length > 1) {
      const imageFileName = matchesFileName[1];
      const imagePath = `${downloadDirectory}/${imageFileName}`;

      const fileStream = fs.createWriteStream(imagePath);
      const totalSize = parseInt(response.headers['content-length'], 10);

      response.data.on('data', (chunk) => {
        fileStream.write(chunk);
        const downloadedSize = fileStream.bytesWritten;
        const percent = (downloadedSize / totalSize) * 100;
        progressBar.update(percent / 100);
      });

      response.data.on('end', () => {
        fileStream.end();
        const endTime = Date.now();
        const downloadTime = (endTime - startTime) / 1000;
        const downloadSpeed = (totalSize / 1024) / downloadTime;
        console.log(`Downloaded: ${imagePath}`);
        console.log(`Download Speed: ${downloadSpeed.toFixed(2)} KB/s`);
      });

      return new Promise((resolve, reject) => {
        fileStream.on('finish', () => {
          resolve(imagePath);
        });

        fileStream.on('error', (error) => {
          reject(error);
        });
      });
    } else {
      console.log(`Failed to extract filename from URL: ${imageUrl}`);
    }
  } catch (error) {
    console.error(`Error downloading image: ${error.message}`);
  }
};

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const baseUrl = 'https://konachan.wjcodes.com/index.php?tag=blue_archive&p=';
  const startPage = 1;
  const endPage = 19;

  for (let currentPage = startPage; currentPage <= endPage; currentPage++) {
    const url = `${baseUrl}${currentPage}`;
    await page.goto(url);

    // Lazy load images by scrolling down the page
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        let totalHeight = 0;
        const distance = 100; // Scroll distance
        const delay = 100; // Delay between scrolls
        const maxTries = 10; // Maximum number of scroll attempts

        const scrollInterval = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight || maxTries <= 0) {
            clearInterval(scrollInterval);
            resolve();
          }

          maxTries--;
        }, delay);
      });
    });

    const buttons = await page.$$('button.am-btn.am-btn-secondary.am-btn-xs');
    const downloadLinks = [];

    for (const button of buttons) {
      const onclickValue = await button.evaluate(element => element.getAttribute('onclick'));
      const regex = /'https:\/\/[^']+'/;
      const matches = onclickValue.match(regex);

      if (matches && matches.length > 0) {
        const downloadLink = matches[0].slice(1, -1);
        downloadLinks.push(downloadLink);
      }
    }
    const downloadDirectory = 'bluearchive';
    if (!fs.existsSync(downloadDirectory)) {
      fs.mkdirSync(downloadDirectory);
    }

    const progressBar = new ProgressBar('Downloading [:bar] :percent :etas', {
      total: 1, // Total number of images, set to 1 for individual progress
      width: 40,
    });

    for (const imageUrl of downloadLinks) {
      await downloadImage(imageUrl, downloadDirectory, progressBar);
    }
  }

  await browser.close();
})();
