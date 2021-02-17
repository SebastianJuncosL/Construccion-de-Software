CREATE TABLE users
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
); 