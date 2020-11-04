const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// Users => Many Posts
User.hasMany(Post, {
  foreignKey: "user_id",
});

// Post => Belongs to One User
Post.belongsTo(User, {
  foreignKey: "user_id",
});

// Comment => Belongs to One User
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

// Comment => Belongs to One Post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
});

// User => Many Comments
User.hasMany(Comment, {
  foreignKey: "user_id",
});

// User => Comments to Many Posts
Post.hasMany(Comment, {
  foreignKey: "post_id",
});

module.exports = { User, Post, Comment };
