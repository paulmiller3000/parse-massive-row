CREATE DATABASE data_import;

CREATE TABLE public.file_import
(
	id SERIAL PRIMARY KEY,
    file_line text
);


CREATE TABLE public.file_transform
(        
    code_one character varying COLLATE pg_catalog."default",
    code_two character varying COLLATE pg_catalog."default",
    code_three character varying COLLATE pg_catalog."default",
	location_name VARCHAR(255)
);