const dotenv = require('dotenv')

dotenv.config();

module.exports = {
    local: {
        localDatabaseUrl: `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.7qd9cly.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`,
        secret: "password"
    }
};

