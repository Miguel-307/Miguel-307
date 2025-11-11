-- ======================================================
-- EJEMPLOS COMPLETOS DE TODOS LOS TIPOS DE JOIN EN MYSQL
-- Autor: Miguel Millán (DAW)
-- ======================================================

-- 🔹 1. Crear base de datos y tablas de ejemplo
DROP DATABASE IF EXISTS empresa_demo;
CREATE DATABASE empresa_demo;
USE empresa_demo;

-- Tabla clientes
CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    ciudad VARCHAR(50)
);

-- Tabla pedidos
CREATE TABLE pedidos (
    id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT,
    fecha DATE,
    total DECIMAL(10,2),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

-- Tabla empleados
CREATE TABLE empleados (
    id_empleado INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    puesto VARCHAR(50)
);

-- Tabla facturas (para más ejemplos)
CREATE TABLE facturas (
    id_factura INT PRIMARY KEY AUTO_INCREMENT,
    id_pedido INT,
    metodo_pago VARCHAR(30),
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido)
);

-- Insertar datos
INSERT INTO clientes (nombre, ciudad) VALUES
('Juan Pérez', 'Madrid'),
('Ana Gómez', 'Sevilla'),
('Carlos Ruiz', 'Málaga'),
('Laura Torres', 'Granada');

INSERT INTO pedidos (id_cliente, fecha, total) VALUES
(1, '2024-01-05', 120.50),
(1, '2024-02-10', 80.00),
(2, '2024-03-02', 55.75),
(4, '2024-04-01', 210.00);

INSERT INTO empleados (nombre, puesto) VALUES
('María López', 'Vendedora'),
('José García', 'Gerente'),
('Luis Ramos', 'Repartidor');

INSERT INTO facturas (id_pedido, metodo_pago) VALUES
(1, 'Tarjeta'),
(2, 'Efectivo'),
(3, 'Bizum');

-- ======================================================
-- 🔹 2. INNER JOIN
-- Devuelve solo registros con coincidencias en ambas tablas
-- ======================================================
SELECT c.nombre AS Cliente, p.id_pedido, p.total
FROM clientes c
INNER JOIN pedidos p
ON c.id_cliente = p.id_cliente;

-- ======================================================
-- 🔹 3. LEFT JOIN
-- Devuelve todos los clientes, aunque no tengan pedidos
-- ======================================================
SELECT c.nombre AS Cliente, p.id_pedido, p.total
FROM clientes c
LEFT JOIN pedidos p
ON c.id_cliente = p.id_cliente;

-- ======================================================
-- 🔹 4. RIGHT JOIN
-- Devuelve todos los pedidos, aunque no tengan cliente (poco común)
-- ======================================================
SELECT c.nombre AS Cliente, p.id_pedido, p.total
FROM clientes c
RIGHT JOIN pedidos p
ON c.id_cliente = p.id_cliente;

-- ======================================================
-- 🔹 5. FULL JOIN (simulado con UNION, MySQL no lo soporta directamente)
-- Devuelve todo, haya o no coincidencias
-- ======================================================
SELECT c.nombre AS Cliente, p.id_pedido, p.total
FROM clientes c
LEFT JOIN pedidos p ON c.id_cliente = p.id_cliente
UNION
SELECT c.nombre AS Cliente, p.id_pedido, p.total
FROM clientes c
RIGHT JOIN pedidos p ON c.id_cliente = p.id_cliente;

-- ======================================================
-- 🔹 6. CROSS JOIN
-- Producto cartesiano (todas las combinaciones posibles)
-- Útil para generar combinaciones, cuidado con el tamaño
-- ======================================================
SELECT c.nombre AS Cliente, e.nombre AS Empleado
FROM clientes c
CROSS JOIN empleados e;

-- ======================================================
-- 🔹 7. SELF JOIN
-- Se usa para comparar registros dentro de la misma tabla
-- Ejemplo: empleados que tienen el mismo puesto
-- ======================================================
SELECT e1.nombre AS Empleado1, e2.nombre AS Empleado2, e1.puesto
FROM empleados e1
INNER JOIN empleados e2
ON e1.puesto = e2.puesto AND e1.id_empleado <> e2.id_empleado;

-- ======================================================
-- 🔹 8. INNER JOIN con varias tablas
-- Combina clientes, pedidos y facturas
-- ======================================================
SELECT c.nombre AS Cliente, p.id_pedido, f.metodo_pago
FROM clientes c
INNER JOIN pedidos p ON c.id_cliente = p.id_cliente
INNER JOIN facturas f ON p.id_pedido = f.id_pedido;

-- ======================================================
-- 🔹 9. INNER JOIN con condición adicional
-- Mostrar solo pedidos mayores de 100 €
-- ======================================================
SELECT c.nombre, p.id_pedido, p.total
FROM clientes c
INNER JOIN pedidos p ON c.id_cliente = p.id_cliente
WHERE p.total > 100;

-- ======================================================
-- 🔹 10. INNER JOIN con nombres de columna diferentes
-- Supón que en otra tabla la columna se llama “codigo_cliente”
-- ======================================================
-- (Ejemplo didáctico, no ejecutable sin esa tabla)
-- SELECT c.nombre, x.total
-- FROM clientes c
-- INNER JOIN ventas x ON c.id_cliente = x.codigo_cliente;

-- ======================================================
-- 🔹 11. INNER JOIN con funciones agregadas
-- Cuántos pedidos tiene cada cliente y suma total
-- ======================================================
SELECT c.nombre, COUNT(p.id_pedido) AS num_pedidos, SUM(p.total) AS total_gastado
FROM clientes c
INNER JOIN pedidos p ON c.id_cliente = p.id_cliente
GROUP BY c.nombre;

-- ======================================================
-- 🔹 12. INNER JOIN con subconsulta
-- Clientes y su gasto total (usando subconsulta en FROM)
-- ======================================================
SELECT c.nombre, t.total_gastado
FROM clientes c
INNER JOIN (
    SELECT id_cliente, SUM(total) AS total_gastado
    FROM pedidos
    GROUP BY id_cliente
) AS t
ON c.id_cliente = t.id_cliente;

-- ======================================================
-- 🔹 13. INNER JOIN con alias y ordenamiento
-- ======================================================
SELECT c.nombre AS Cliente, p.total AS TotalPedido
FROM clientes AS c
INNER JOIN pedidos AS p ON c.id_cliente = p.id_cliente
ORDER BY p.total DESC;

-- ======================================================
-- 🔹 14. INNER JOIN encadenado (3 tablas)
-- Cliente + Pedido + Factura
-- ======================================================
SELECT c.nombre, p.total, f.metodo_pago
FROM clientes c
INNER JOIN pedidos p ON c.id_cliente = p.id_cliente
INNER JOIN facturas f ON p.id_pedido = f.id_pedido;

-- ======================================================
-- 🔹 15. INNER JOIN + BETWEEN y fechas
-- Pedidos realizados entre febrero y abril de 2024
-- ======================================================
SELECT c.nombre, p.fecha, p.total
FROM clientes c
INNER JOIN pedidos p ON c.id_cliente = p.id_cliente
WHERE p.fecha BETWEEN '2024-02-01' AND '2024-04-30';

-- ======================================================
-- 🔹 16. INNER JOIN + LIKE
-- Clientes cuyo nombre contiene 'a'
-- ======================================================
SELECT c.nombre, p.id_pedido, p.total
FROM clientes c
INNER JOIN pedidos p ON c.id_cliente = p.id_cliente
WHERE c.nombre LIKE '%a%';

-- ======================================================
-- 🔹 17. INNER JOIN con IS NULL (para buscar sin coincidencias)
-- ======================================================
SELECT c.nombre
FROM clientes c
LEFT JOIN pedidos p ON c.id_cliente = p.id_cliente
WHERE p.id_pedido IS NULL;

-- ======================================================
-- 🔹 18. INNER JOIN + HAVING (filtrar después de agrupar)
-- Mostrar clientes con gasto total mayor a 100 €
-- ======================================================
SELECT c.nombre, SUM(p.total) AS total_gastado
FROM clientes c
INNER JOIN pedidos p ON c.id_cliente = p.id_cliente
GROUP BY c.nombre
HAVING total_gastado > 100;

-- ======================================================
-- FIN DEL ARCHIVO
-- ======================================================
