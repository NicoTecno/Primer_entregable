class Producto {
  static idIncremental = 0;
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
    this.id = Producto.idIncremental;
    Producto.idIncremental++;
  }
}

class ProductManajer {
  #arr;

  constructor(products) {
    this.#arr = [];
  }

  addProduct(...params) {
    if (params.length !== 6) {
      console.error("Error: Incorrect number of parameters");
      return;
    }

    const [title, description, price, thumbnail, code, stock] = params;
    if (this.codigoExiste(code)) {
      console.error(`Error : Codigo ya existe`);
      return;
    }

    const nuevoProducto = new Producto(
      title,
      description,
      price,
      thumbnail,
      code,
      stock
    );
    this.#arr.push(nuevoProducto);
  }

  getProducts() {
    return this.#arr;
  }

  getProductById(id) {
    const productoEncontrado = this.#arr.find((producto) => producto.id === id);
    return productoEncontrado
      ? productoEncontrado
      : console.log(`No se encontró ningún producto con el ID ${id}`);
  }

  codigoExiste = (code) => {
    if (this.#arr.find((producto) => producto.code == code)) return true;
    return false;
  };
}
