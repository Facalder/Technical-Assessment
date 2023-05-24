-- Tabel untuk menyimpan informasi pengguna
CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  role_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Tabel untuk menyimpan informasi peran (role)
CREATE TABLE roles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


-- Masukkan data pengguna
INSERT INTO users (username, password, role_id) VALUES
  ('user1', 'password1', 1),
  ('user2', 'password2', 2),
  ('user3', 'password3', 1);

-- Masukkan data peran
INSERT INTO roles (name) VALUES
  ('Admin'),
  ('User');


-- Ambil data pengguna dan peran
SELECT u.username, r.name AS role
FROM users u
JOIN roles r ON u.role_id = r.id;
