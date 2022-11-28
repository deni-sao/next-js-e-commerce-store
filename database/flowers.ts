import { sql } from './connect';

export type Flower = {
  id: number;
  firstName: string;
  type: string;
  price: number;
  alt: string;
};

export async function getFlowers() {
  const flowers = await sql<Flower[]>`
  SELECT * FROM flowers;
  `;

  return flowers;
}

export async function getFLowerById(id: number) {
  const [flower] = await sql<Flower[]>`
  SELECT * FROM flowers WHERE id = ${id}`;
  return flower;
}
