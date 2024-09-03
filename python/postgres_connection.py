import psycopg2
from psycopg2 import OperationalError, sql


def get_postgres_connection():
    try:
        conn = psycopg2.connect(
            dbname="mydatabase",
            user="myuser",
            password="mypassword",
            host="localhost",
            port="5432",
        )
        print("Connected to PostgreSQL database")
        return conn
    except OperationalError as e:
        print("Error while connecting to PostgreSQL", e)
        return None


# Initialize the PostgreSQL connection
conn = get_postgres_connection()

if conn:
    try:
        cursor = conn.cursor()

        # Example: Creating a new table
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100),
                age INT,
                city VARCHAR(100)
            )
        """)
        conn.commit()
        print("Table 'users' created or already exists.")

        # Example: Inserting a record
        cursor.execute(
            """
            INSERT INTO users (name, age, city) VALUES (%s, %s, %s)
        """,
            ("Alice", 30, "New York"),
        )
        conn.commit()
        print("Inserted a new record into 'users'.")

        # Example: Querying records
        cursor.execute("SELECT * FROM users")
        rows = cursor.fetchall()
        print("Records in 'users':")
        for row in rows:
            print(row)

        # Example: Updating a record
        cursor.execute(
            """
            UPDATE users SET age = %s WHERE name = %s
        """,
            (31, "Alice"),
        )
        conn.commit()
        print(f"Updated {cursor.rowcount} record(s).")

        # Example: Deleting a record
        cursor.execute("DELETE FROM users WHERE name = %s", ("Alice",))
        conn.commit()
        print(f"Deleted {cursor.rowcount} record(s).")

    except OperationalError as e:
        print("Error executing PostgreSQL operations:", e)
    finally:
        cursor.close()
        conn.close()
        print("PostgreSQL connection is closed.")
