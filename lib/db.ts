import { DataSource } from 'typeorm';
import { User } from './entities/User';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: "localhost",
  port: 3306,
  username: "root",
  password: "1234",
  database: "nextjs",
  entities: [User],
  synchronize: true,
  logging:false,
  migrations:[],
  subscribers:[],
});