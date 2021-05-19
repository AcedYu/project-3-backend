const Post = require("./Post");
const User = require("./User");
const Comment = require("./Comment");
const Followers = require("./Followers");

// User can have many posts
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Post.belongsTo(User, {
  foreignKey:'user_id'
});

// User can have many comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Posts can have many comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

// Users can belong to many users through the Followers model
User.belongsToMany(User, {
  through: 'followers',
  foreignKey: 'user_id',
  otherKey: 'follow_id'
});

module.exports = { Post, User, Comment };