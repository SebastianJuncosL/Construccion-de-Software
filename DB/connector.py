import mysql.connector as sql

try:
    db = sql.connect(host="127.0.0.1",
                     user="root",
                     password="A01022629",
                     db="musica")

    cur = db.cursor()

    cur.execute(
        "INSERT INTO users VALUES('puma', 'puma@tec.com');"
    )
    print("Todo bien")
    db.commit()

    cur.close()

    db.close()

except sql.Error as err:
    print(f"Error: {err}")
