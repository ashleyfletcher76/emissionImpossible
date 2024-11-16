CREATE TABLE IF NOT EXISTS city_coordinates (
    id SERIAL PRIMARY KEY,
    number1 FLOAT NOT NULL,
    number2 FLOAT NOT NULL,
    UNIQUE (number1, number2) -- Add a unique constraint for number1 and number2
);

INSERT INTO city_coordinates (number1, number2)
VALUES (49.18, 9.16)
ON CONFLICT (number1, number2) DO NOTHING; -- Avoid duplicates based on the unique constraint
