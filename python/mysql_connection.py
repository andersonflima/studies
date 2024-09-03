import mysql.connector
from mysql.connector import Error


def get_mysql_connection():
    try:
        conn = mysql.connector.connect(
            host="localhost",
            user="myuser",
            password="mypassword",
            database="mydatabase",
        )
        if conn.is_connected():
            print("Connected to MySQL database")
            return conn
    except Error as e:
        print("Error while connecting to MySQL", e)
        return None


# Initialize the MySQL connection
conn = get_mysql_connection()

if conn:
    try:
        # Example: Creating a new table
        cursor = conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(100),
                age INT,
                city VARCHAR(100)
            )
        """)
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

    except Error as e:
        print("Error executing MySQL operations:", e)
    finally:
        cursor.close()
        conn.close()
        print("MySQL connection is closed.")
