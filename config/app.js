
// Application configuration details

exports.dev = {
  db: 'mongodb://localhost/mckinsey',
  ports: {
    mongo: 27017,
    server: 8001
  }
};

exports.prod = {
    db: 'mongodb://localhost/mckinsey',
    ports: {
      mongo: 27017,
      server: 80
    }
}
