const { logAction } = require('./utils/logger');

async function followUser(username) {
  console.log(`Following user: ${username}`);
  logAction(`Followed user: ${username}`);
  // Add Instagram automation logic here
}

async function likePost(postUrl) {
  console.log(`Liking post: ${postUrl}`);
  logAction(`Liked post: ${postUrl}`);
  // Add Instagram automation logic here
}

async function commentOnPost(postUrl, comment) {
  console.log(`Commenting on post: ${postUrl}`);
  console.log(`Comment: ${comment}`);
  logAction(`Commented on post: ${postUrl} with: ${comment}`);
  // Add Instagram automation logic here
}

module.exports = { followUser, likePost, commentOnPost };
