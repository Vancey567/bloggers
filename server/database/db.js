import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-aksl99v-shard-00-00.dnen9dj.mongodb.net:27017,ac-aksl99v-shard-00-01.dnen9dj.mongodb.net:27017,ac-aksl99v-shard-00-02.dnen9dj.mongodb.net:27017/?ssl=true&replicaSet=atlas-jrmmsi-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        // await mongoose.connect(URL, { useNewUrlParser: true })
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected');
    } catch (error) {
        console.log('Error Connecting to DataBase ', error);
    }
};

export default Connection;