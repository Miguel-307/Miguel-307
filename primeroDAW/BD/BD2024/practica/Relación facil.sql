1.
Select nombre From Producto
2.
Select nombre, precio From Producto
3.
Select*From Producto,
4.
Select nombre, precio From Producto;
5.
Select  codigo_fabricante From producto
6.
Select distinct  codigo_fabricante From producto;
7.
Select nombre From fabricante 
Order By nombre ASC
8.
Select nombre From fabricante 
Order By nombre Desc
9.
Select nombre From producto
where codigo_fabricante = 2;
10.
Select nombre From producto
where precio <=120;
11.
Select nombre From producto
where precio >=400;
12.
Select nombre From producto
where precio <400;
13.
Select*From producto
where precio >= 80 and precio <=300
14.
Select*From producto
where precio between 60 and 200
15.
Select*From producto
where precio >200 and cod_fabricante =6
16.
Select*From producto
where cod_fabricante = 1 or cod_fabricante =3 or cod_fabricante =5
17.
Select*From producto
where cod_fabricante in (1,3,5);
18.
Select nombre,precio*100  As centimetros
From producto;
19.
Select nombre from fabricante
where nombre like "S%";
20.
Select nombre from fabricante
where nombre like "%e";
21.
select nombre from fabricante
where nombre like "%w%";
22.
Select nombre from producto
where nombre like "%Portátil%"
23.
Select nombre From producto
where nombre like "%Monitor%" and precio <215
24.
Select nombre,precio from producto
where precio >= 180;