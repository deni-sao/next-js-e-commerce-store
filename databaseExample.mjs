import { config } from 'dotenv-safe';
import postgres from 'postgres';

config();

const sql = postgres();

// console.log(
//   await sql`

// SELECT * FROM flowers;
// `,
// );

// just for testing, we always want a persistant connection  usually, we don't want to end
await sql.end();
