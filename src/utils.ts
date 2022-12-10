import { writeFile, readFile } from 'node:fs/promises';
import { join } from 'path';

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
