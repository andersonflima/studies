import mysql.connector

def get_mysql_connection():
    conn = mysql.connector.connect(
        host="localhost",
        user="myuser",
        password="mypassword",
        database="mydatabase"
    )
    return conn

conn = get_mysql_connection()
print("Connected to MySQL:", conn)