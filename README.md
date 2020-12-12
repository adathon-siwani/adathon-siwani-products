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

```
wget -i imgs_sm.csv -P imgs_sm
```

# Modo de uso

`${base_url}/${size}/${img_name}`

base_url = https://raw.githubusercontent.com/adathon-siwani/siwani-products/master
size = imgs|imgs_sm
img_name = el nombre de la imagen del BE

Por ejemplo, si se desea obtener la imagen `228af0_3fcc88019f1a44afb46a76d10c0f886c~mv2.jpg`
se debe acceder agregar la base url `https://raw.githubusercontent.com/adathon-siwani/siwani-products/master/imgs/` o `https://raw.githubusercontent.com/adathon-siwani/siwani-products/master/imgs_sm/`, quedando como resultado
![siwani](https://raw.githubusercontent.com/adathon-siwani/siwani-products/master/imgs_sm/228af0_3fcc88019f1a44afb46a76d10c0f886c~mv2.jpg)
