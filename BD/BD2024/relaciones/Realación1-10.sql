-- 1. Encontrar los códigos de proveedores que suministran a J1.
SELECT S#
FROM SUMINISTROS
WHERE J# = 'J1';

-- 2. Encontrar todos los suministros cuya cantidad esté entre 200 y 300 inclusive.
SELECT *
FROM SUMINISTROS
WHERE CANTIDAD BETWEEN 200 AND 300;

-- 3. Hacer una lista de todas las combinaciones color/ciudad que se pueden encontrar en la relación de piezas.
SELECT COLOR, CIUDAD
FROM PIEZAS;

-- 4. Encontrar todos los triples de códigos de proveedor, proyecto y piezas que estén en la misma ciudad.
SELECT SUMINISTROS.S#, SUMINISTROS.J#, SUMINISTROS.P#
FROM SUMINISTROS, PROVEEDORES, PROYECTOS
WHERE SUMINISTROS.S# = PROVEEDORES.S# AND SUMINISTROS.J# = PROYECTOS.J# AND PROVEEDORES.CIUDAD = PROYECTOS.CIUDAD;

-- 7. Encontrar todas las parejas de nombres de ciudades tales que la primera corresponde a la de un proveedor y la segunda a la de un proyecto entre los cuales ha habido un suministro.
SELECT PROVEEDORES.CIUDAD AS CIUDAD_PROVEEDOR, PROYECTOS.CIUDAD AS CIUDAD_PROYECTO
FROM SUMINISTROS, PROVEEDORES, PROYECTOS
WHERE SUMINISTROS.S# = PROVEEDORES.S# AND SUMINISTROS.J# = PROYECTOS.J#;

-- 8. Encontrar los códigos de piezas suministradas a cualquier proyecto por un proveedor que esté en la misma ciudad que este proyecto.
SELECT SUMINISTROS.P#
FROM SUMINISTROS, PROVEEDORES, PROYECTOS
WHERE SUMINISTROS.S# = PROVEEDORES.S# AND SUMINISTROS.J# = PROYECTOS.J# AND PROVEEDORES.CIUDAD = PROYECTOS.CIUDAD;

-- 9. Encontrar los códigos de los proyectos que tienen al menos un proveedor que no esté en su misma ciudad.
SELECT SUMINISTROS.J#
FROM SUMINISTROS, PROVEEDORES, PROYECTOS
WHERE SUMINISTROS.S# = PROVEEDORES.S# AND SUMINISTROS.J# = PROYECTOS.J# AND PROVEEDORES.CIUDAD <> PROYECTOS.CIUDAD;

-- 10. Encontrar aquellos proyectos que usan una pieza suministrada por S1.
SELECT DISTINCT J#
FROM SUMINISTROS
WHERE P# IN (SELECT P# FROM SUMINISTROS WHERE S# = 'S1');
