const User = require("./User");
const Post = require("./Post");
const Comment = require('./Comment');

// create associations
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onUpdate: 'cascade',
  onDelete: 'cascade'
});

module.exports = { User, Post, Comment };
