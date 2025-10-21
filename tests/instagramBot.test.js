const InstagramBot = require('../src/instagramBot');

test('Login should be successful', async () => {
  const bot = new InstagramBot({
    username: 'testUser',
    password: 'testPass',
    deviceId: 'testDevice'
  });
  await expect(bot.login()).resolves.toBe('Logged in successfully.');
});

test('Follow User', async () => {
  const bot = new InstagramBot({
    username: 'testUser',
    password: 'testPass',
    deviceId: 'testDevice'
  });
  await expect(bot.followUser('testUser')).resolves.toBe('Followed user: testUser');
});
