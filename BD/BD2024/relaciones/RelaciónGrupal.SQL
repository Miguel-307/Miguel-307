--Individual
--Ejercicio5
SELECT P# AS NUMERO_PIEZA, NOMBRE AS NOMBRE_PIEZA
FROM PIEZAS
WHERE P# IN (
    SELECT DISTINCT S.P#
    FROM SUMINISTROS S
    WHERE S# IN (
        SELECT S#
        FROM PROVEEDORES
        WHERE CIUDAD = 'Londres'
    )
);
--Ejercicio6
SELECT DISTINCT S.P#
FROM SUMINISTROS S
WHERE S.S# IN (
    SELECT PR.S#
    FROM PROVEEDORES PR
    WHERE PR.CIUDAD = 'Londres'
)
AND S.J# IN (
    SELECT J#
    FROM PROYECTOS
    WHERE CIUDAD = 'Londres'
);
--ejercicio14
--La consulta busca los proyectos que obtienen al menos algunas de las piezas de S1. Para hacer esto, primero miramos todas las piezas que S1 suministra. Luego, vemos qué proyectos usan esas piezas. Si un proyecto usa al menos una de las piezas suministradas por S1, lo incluimos en los resultados.
SELECT DISTINCT SPJ.J#
FROM SPJ
WHERE SPJ.J# NOT IN (
    SELECT DISTINCT SPJ.J#
    FROM SPJ
    WHERE SPJ.S# <> 'S1'
)
AND SPJ.J# IN (
    SELECT DISTINCT J#
    FROM SPJ
);

--Grupal,nos quedamos con el de Santino porque es mas simple y estaba mas compleja
--ejercicio5
SELECT NOMBRE
FROM P
WHERE P# IN(SELECT P#
            FROM SPJ
            WHERE S# IN(SELECT S#
                        FROM S1
                        WHERE CIUDAD LIKE"%LONDRES%"));
--ejercicio6
SELECT P#
FROM P
WHERE P# IN (
    SELECT P#
    FROM SPJ
    WHERE S# IN (SELECT S#
        FROM S
        WHERE ciudad LIKE "%Londres%")
    AND
    J# IN (SELECT J#
        FROM J
        WHERE ciudad LIKE "%Londres%"));
--ejercicio14
SELECT J#
FROM J
WHERE J# IN(SELECT J#
        FROM SPJ
        WHERE S# LIKE"%S1%" )
