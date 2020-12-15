CREATE TABLE IF NOT EXISTS projects(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    priority INTEGER NOT NULL,
    description text,
    deliverydate date NOT NULL

);

CREATE TABLE IF NOT EXISTS tasks(
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    done BOOLEAN,
    projectsId INTEGER REFERENCES projects(id)
);

-- inserts for projects

insert into projects(name, priority, description, deliverydate)
    VALUES ('make a web app', 1, 'usando js', 2019-05-10);

insert into projects(name, priority, description, deliverydate)
    VALUES ('make a portolio', 2, 'usando react', '02-02-2020');

insert into projects(name, priority, description, deliverydate)
    VALUES ('make a photo gallery', 3, 'usando angular', '01-05-2020');

-- inserts for tasks

insert into tasks(name, done, projectsId)
    VALUES ('formulario', false, 1);

insert into tasks(name, done, projectsId)
    VALUES ('webmail', true, 1);

insert into tasks(name, done, projectsId)
    VALUES ('formulario', false, 3);