Repo de productos de Siwan'i

Este repo es para el Adathon, para tener el listado de productos y sus respectivas imágenes disponibles en el marco del Hackathon.

Archivo .har obtenido de https://www.fundacionniwok.org/siwani.

Para parsear el archivo y extraer `products.json`, `products.csv` y `imgs.csv` ejecutar:

```
node load.js
```

Para descargar las imágenes desde el csv:

```
wget -i imgs.csv -P imgs
```
