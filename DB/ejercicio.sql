/* CREATE TABLE users
(
    userID INT AUTO_INCREMENT PRIMARY KEY,
    profile_name VARCHAR(20),
    country VARCHAR(20),
    email VARCHAR(50)
);

CREATE TABLE artist
(
    artistID INT AUTO_INCREMENT PRIMARY KEY,
    artistName VARCHAR(20),
    listener INT
);

CREATE TABLE album
(
    albumID INT AUTO_INCREMENT PRIMARY KEY,
    atitle VARCHAR(50),
    ayear YEAR(4),
    nosongs INT,
    totalduration INT,
    genre VARCHAR(50),
    artist_id INT,
    FOREIGN KEY(artist_id) REFERENCES artist(artistID) ON DELETE CASCADE
);

CREATE TABLE song
(
    songID INT AUTO_INCREMENT PRIMARY KEY,
    stitle VARCHAR(50),
    duration INT,
    album_id INT,
    FOREIGN KEY(album_id) REFERENCES album(albumID) ON DELETE CASCADE
);

CREATE TABLE followingArtists
(
    user_id INT,
    artist_id INT,
    PRIMARY KEY(user_id, artist_id),
    FOREIGN KEY(user_id) REFERENCES users(userID) ON DELETE CASCADE,
    FOREIGN KEY(artist_id) REFERENCES artist(artistID) ON DELETE CASCADE
);

CREATE TABLE followingAlbums
(
    user_id INT,
    album_id INT,
    PRIMARY KEY(user_id, album_id),
    FOREIGN KEY(user_id) REFERENCES users(userID) ON DELETE CASCADE,
    FOREIGN KEY(album_id) REFERENCES album(albumID) ON DELETE CASCADE
); */

INSERT INTO users(profile_name, country, email) 
        VALUES("junqui", "mexico", "junqui@tec.com"),
        ("abellana", "mexico", "abellana@tec.com"),
        ('puma', 'mexico', 'puma@tec.com'),
        ("john", "usa", "john@us.com"),
        ("octavio", "mexico", "octavio@tec.com");

INSERT INTO artist(artistName, listener) 
        VALUES("Coldplay", 7000000),
        ("Radiohead", 800000),
        ("RHCP", 2000000);

INSERT INTO album(atitle, ayear, nosongs, totalduration, genre, artist_id) 
        VALUES("A Rush of Blood to the Head", 2002, 11, 3240, "Rock", 10),
        ("A Moon Shaped Pool", 2016, 11, 3120, "Rock", 11),
        ("Californication", 1999, 15, 3360, "Rock", 12);


INSERT INTO song(stitle, duration, album_id)
        VALUES ("Around the World", 4, 15),
        ("Parallel Universe", 4, 15),
        ("Scar Tissue", 3, 15), 
        ("Otherside", 4, 15),
        ("Get on Top", 3, 15),
        ("Californication", 5, 15),
        ("Easily", 3, 15),
        ("Porcelain", 2, 15),
        ("Emit Remmus", 4, 15),
        ("I Like Dirt", 2, 15),
        ("Politik", 319, 13), 
        ("In my Place", 229, 13), 
        ("Clocks", 306, 13), 
        ("The Scientist", 309, 13);


users 1,2,3,4,5,6,7,8,9,10
artist 10,11,12
album 13,14,15
song 29 - 42


INSERT INTO followingArtists(user_id, artist_id)
VALUES
(1,10),
(2,11),
(3,12),
(4,10),
(5,11);


INSERT INTO followingAlbums(user_id, album_id) VALUES
(6,13),
(7,14),
(8,15),
(9,13),
(10,14);

SELECT users.profile_name, album.atitle 
FROM users, album, followingAlbums
WHERE users.userID = followingAlbums.user_id 
    AND album.albumID = followingAlbums.album_id;

SELECT users.profile_name AS user, album.atitle  AS album
FROM users 
INNER JOIN followingAlbums 
    ON users.userID = followingAlbums.user_id
INNER JOIN album
    ON album.albumID = followingAlbums.album_id;


SELECT song.stitle AS song, artist.artistName AS artist
FROM song
INNER JOIN album
    ON song.album_id = album.albumID
INNER JOIN artist
    ON artist.artistID = album.artist_id;