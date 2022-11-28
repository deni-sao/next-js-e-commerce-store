-- This file will not run
-- Example queries

CREATE TABLE flowers(
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  first_name varchar(30) NOT NULL,
  type varchar(40) NOT NULL,
  price integer NOT NULL,
  alt varchar(100) NOT NULL

);

-- insert flowers

INSERT INTO flowers
(first_name, type, price, alt)
VALUES


  (
    'Ella',
    'tulip',
    '20',
    'Bouquet of red tulips'
  ),
  (

    'Lily',
    'lily',
    '20',
    'Bouquet of peach-colored  lillies'
  ),
  (

    'Milena',
    'orchid',
    '20',
    'Bouquet of pale lilac orchids'
  ),
  (

    'Peony',
    'peony',
    '20',
    'Bouquet of pale pink peonies'
  ),
(
   'Dawson',
    'rose',
    '20',
    'Bouquet of pale pink roses'
);


-- get all flowers
SELECT * FROM flowers;
