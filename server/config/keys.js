module.exports = {
  MONGODB_URI:
    process.env.MONGODB_URI ||
    'mongodb+srv://user:user123@cluster0.gztky.mongodb.net/test?retryWrites=true&w=majority',
};
