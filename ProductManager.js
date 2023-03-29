class ProductManager{
    constructor(){
        this.products = [];
    }//constructor
    // static idAuto = 0

    addProduct = (pTitle, pDescription, pPrice, pThumbnail, pCode, pStock) => {
        const product = {
            pTitle,
            pDescription,
            pPrice,
            pThumbnail,
            pCode,
            pStock
        }//object product


        const validationCode = this.products.find((product) => product.pCode === pCode);

        if(validationCode){
            console.log(`There is already a product with the CODE ${validationCode.pCode}. \nTry again with a different CODE`);
            return;
        }else{
            if(this.products.length === 0){
                product.id = 1;
            }else{
                product.id = this.products[this.products.length -1].id + 1;
                console.log(`The ID of this product is ${product.id}`)
            }//else ID

            //Adds a new product to the products array[]
            this.products.push(product);
        }//else validationCode

    }//method addProduct

    getProducts = () => {
        //returns array with all current products
        console.log(this.products);
        return this.products;
    }//method getProducts

    getProductById = (id) => {
        const productId = this.products.find((product) => product.id === id);

        if(!productId){
            console.log("Not found, try with another ID")
            return;
        }else{
            console.log(`This is the product with the ID ${productId.id}`)
            console.log(productId)
            return;
        }//else
    }//method getProductById

}//class ProductManager


//TESTING
//Instances of the class ProductManger.js
// const walmart = new ProductManager();
// walmart.getProducts(); //output [] empty array
// console.log("=======")
// walmart.addProduct("Laptop ASUS", "Laptop ASUS 16RAM", 1500, "asus.jpg", 1234, 30);
// walmart.getProducts(); //output [] array with a new product
// walmart.addProduct("Laptop ASUS", "Laptop ASUS 16RAM", 1500, "asus.jpg", 1234, 30);
// walmart.addProduct("Laptop ASUS", "Laptop ASUS 16RAM", 1500, "asus.jpg", 1234, 30);
// walmart.addProduct("Laptop ASUS", "Laptop ASUS 16RAM", 1500, "asus.jpg", 1234, 30);
// walmart.addProduct("Laptop ASUS", "Laptop ASUS 16RAM", 1500, "asus.jpg", 1234, 30);
// walmart.addProduct("Notebook", "White paper", 600, "notebook.jpg", 5678, 15);
// walmart.addProduct("Water", "Crystal water", 20, "water.jpg", 0906, 5);


// console.log("new getProducts() method======");
// walmart.getProducts(); //output [] array with a new product
// walmart.getProductById(5);