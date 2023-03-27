class ProductManager{
    constructor(){
        this.products = [];
    }//constructor
    static idAuto = 0

    addProduct = (pTitle, pDescription, pPrice, pThumbnail, pCode, pStock) => {
        this.title = pTitle;
        this.descripcion = pDescription;
        this.price = pPrice;
        this.thumbnail = pThumbnail;
        this.code = pCode;
        this.stock = pStock;

        ProductManager.idAuto++;
    }//method addProduct

    getProducts = () => {
        return this.products;
    }//method getProducts

    // getProductById = () => {
    //     this.products.forEach()



    // }//method getProductById


}//class ProductManager


//Instance of the class ProductManger

const walmart = new ProductManager();

console.log(walmart.getProducts());