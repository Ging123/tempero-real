import DefaultNumberInput from "../DefaultNumberInput/Index";
import Text from "../Text/Index";

interface product {
  name:string,
  quantity:number,
  price:number
}

function createProduct(product:product, index:number) {
  return (
    <div key={index} className="product-container">
      <div>
        <Text 
          className="bold"
          color="black"
          content={ product.name } 
          type="small"
        />
        <Text
          className="bold"
          color="gray"
          content={ `R$${product.price}` }
          margin="5px 0px 0px 0px"
          type="small"
        />
      </div>
      <DefaultNumberInput
        quantity={ product.quantity }
        max={ 1000 }
      />
    </div>
  );
}

export default createProduct;