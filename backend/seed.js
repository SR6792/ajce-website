const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./models/User');

const seedUser = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB connected');

        // Delete existing test user if exists
        await User.deleteOne({ email: 'admin@ajce.in' });

        // Create test user
        const user = await User.create({
            name: 'Admin User',
            email: 'admin@ajce.in',
            password: 'password123',
            role: 'admin',
        });

        console.log('✅ Test user created successfully!');
        console.log('   Email:    admin@ajce.in');
        console.log('   Password: password123');
        console.log('   Role:     admin');

        await mongoose.connection.close();
        process.exit(0);
    } catch (error) {
        console.error('❌ Seeding error:', error.message);
        await mongoose.connection.close();
        process.exit(1);
    }
};

seedUser();
