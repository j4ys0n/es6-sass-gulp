
// Application configuration details

exports.dev = {
  db: 'mongodb://localhost/store',
  ports: {
    mongo: 27017,
    server: 9001
  }
};

exports.prod = {
    db: 'mongodb://localhost/store',
    ports: {
      mongo: 27017,
      server: 80
    }
}
