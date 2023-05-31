import { Sequelize } from 'sequelize'
import Category from '../app/models/Category'
import Product from '../app/models/Product'
import User from '../app/models/Users'
// import configDatabase from '../config/database'
import mongoose from 'mongoose'

const models = [User, Product, Category]

class Database {
    constructor() {
        this.init()
        this.mongo()
    }

    init() {
        this.connection = new Sequelize('postgresql://postgres:gfKpjSclqFkQ5dKyEKXd@containers-us-west-56.railway.app:8075/railway')
        models.map(model => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models))
    }

    mongo() {
        this.mongoConnection = mongoose.connect('mongodb://mongo:AKxqJcHXzVCZ8j5dgO1W@containers-us-west-38.railway.app:6560',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
    }
}

export default new Database()