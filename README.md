# Resstructuracion de proyecto
## Puntos a cumplir
1. Usar TS en lugar de JS.
2. Separar el JS del HTML.
3. Intentar replicar el boostrap, usando solo css.
4. Hacer la conexion, usando una nueva tecnologia(sin dejar php).
    - Sustituyendo solo sql-server.
5. La funcionalidad principal de php(hacer solo los cambios necesarios).

### Extras
1. Darle funcionalidad al focus del nav.
2. agregar la opcion de trasnformar el la informacion a xml.
3. Que en la url no se vea el nombre del archivo al alternar entre **lista de empleados** y **agregar datos**.

## NOTAS
- **tener cuidado con php**, y hacer peticiones a un archivo php, que incluye(`include()`) otro script con echos y jsons.
    > Para la conexion separar la conexion de la respuesta(dos archivos diferentes).
- addInfoXml.php y bds_insert.php de momento no se ocupan, es para basarme en eso cuando implemente lo del xml.