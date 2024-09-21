-- creación de base de datos ---
CREATE DATABASE app_seminario;

-- uso de la base de datos -----
USE app_seminario;

-- creación del catálogo de la tabla estados solicitud
CREATE TABLE STATE_Aplication (
    id_estado_Solicitud INT NOT NULL,
    Description_estado VARCHAR(150) NOT NULL,
    PRIMARY KEY (id_estado_Solicitud)
);

-- DATOS de los estados de la solicitud --
INSERT INTO STATE_Aplication (id_estado_Solicitud, Description_estado) VALUES (1, 'Solicitud Cotizacion');
INSERT INTO STATE_Aplication (id_estado_Solicitud, Description_estado) VALUES (2, 'Cotizado');
INSERT INTO STATE_Aplication (id_estado_Solicitud, Description_estado) VALUES (3, 'En Proceso');
INSERT INTO STATE_Aplication (id_estado_Solicitud, Description_estado) VALUES (4, 'Finalizada');
INSERT INTO STATE_Aplication (id_estado_Solicitud, Description_estado) VALUES (5, 'Cancelada Cotizador');
INSERT INTO STATE_Aplication (id_estado_Solicitud, Description_estado) VALUES (6, 'Cancelada Viajero');


--- creacion de la tabla solicitud --
CREATE TABLE Detalle_Solicitud (
    id_solicitud INT NOT NULL,
    id_Producto INT NOT NULL,
    Descripcion_Producto VARCHAR(150) NOT NULL,
    id_estado INT NOT NULL,
    Costo DECIMAL(10,2) NOT NULL,
    Usuario_Creacion VARCHAR(50) NOT NULL,
    Fecha_Creacion DATETIME NOT NULL,
    Usuario_Actualizacion VARCHAR(50),
    Fecha_Actualizacion DATETIME,
    url VARCHAR(250),
    cantidad INT NOT NULL,
    PRIMARY KEY (id_solicitud),
    CONSTRAINT fk_estado FOREIGN KEY (id_estado) REFERENCES STATE_Aplication(id_estado_Solicitud)
);


-- tabla de solicitud ---
CREATE TABLE Aplication (
    id_Solicitud INT NOT NULL,
    Id_Viajero INT NOT NULL,
    Id_Comprador INT NOT NULL,
    Monto_Cotizacion DECIMAL(10,2) NOT NULL,
    Estatus_Solicitud INT NOT NULL,
    Descripcion VARCHAR(200),
    Motivo_Anulacion VARCHAR(200),
    monto_total_productos DECIMAL(10,2),
    PRIMARY KEY (id_Solicitud),
    CONSTRAINT fk_estado_solicitud FOREIGN KEY (Estatus_Solicitud) REFERENCES STATE_Aplication(id_estado_Solicitud)
);