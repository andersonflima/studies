import psycopg2

def get_postgres_connection():
    conn = psycopg2.connect(
        dbname="mydatabase",
        user="myuser",
        password="mypassword",
        host="localhost",
        port="5432"
    )
    return conn

conn = get_postgres_connection()
print("Connected to PostgreSQL:", conn)