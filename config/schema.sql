USE burgers_db;

CREATE TABLE burgers_table(
	id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50) NOT NULL,
    is_favorite BOOLEAN DEFAULT false,
    
    PRIMARY KEY(id)
    );
    
SELECT * FROM burgers_table;