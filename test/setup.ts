import { rm } from 'fs/promises';
import { join } from 'path';
import { getConnection } from 'typeorm';

global.beforeEach(async () => {
  try {
    await rm(join(__dirname, '..', 'test.sqlite'));
    const connection = getConnection();
    if (connection.isConnected) {
      await connection.close();
    }
  } catch {}
});
