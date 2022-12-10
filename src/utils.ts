import { writeFile, readFile } from 'node:fs/promises';
import { join } from 'path';
import * as http from 'http';

export async function writeDataToFile(data, type) {
  try {
    await writeFile(
      join(__dirname, `./../files/${type}.json`),
      JSON.stringify(data),
    );
    console.log('The file has been saved!');
  } catch (err) {
    console.error(err);
  }
}

export async function readDataFromFile(type) {
  try {
    const data = await readFile(
      join(__dirname, `./../files/${type}.json`),
      'utf8',
    );
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getData(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let data = '';

        // 数据块到达
        res.on('data', (chunk) => {
          data += chunk;
        });

        // 整个响应都被接收
        res.on('end', () => {
          resolve(data);
        });
      })
      .on('error', (err) => {
        reject(err);
      });
  });
}
