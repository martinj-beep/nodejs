import dotenv from "dotenv"; // cia padarysim prisijungimus visus
import pg from "pg";

dotenv.config(); // visuomet kuomet faile naudojamas dotenv reikia sitos eilutes

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, DB_SSL } = process.env;

const config = {
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    ssl: {
        rejectUnauthorized: true,
        ca: DB_SSL,
    },
};

const pool = new pg.Pool(config); // vietoje client. Pool labiau optimizuotas kuomet turim daugiau prisijungimu prie duomenu bazes

export default pool;