import { Link } from "react-router-dom";
const products = [
  { id: 1, name: "amaze plus-i", image: "/images/product1.png" },
  { id: 2, name: "amaze plus-i", image: "/images/product2.png" },
  { id: 3, name: "fast plus-i", image: "/images/product3.png" },
  { id: 4, name: "galacto power", image: "/images/product4.png" },
  { id: 5, name: "liv power", image: "/images/product5.png" },
  { id: 6, name: "i-power", image: "/images/product6.png" },
  { id: 7, name: "fast out-i", image: "/images/product7.png" },
  { id: 8, name: "fast out-s", image: "/images/product8.png" },
  { id: 9, name: "magico", image: "/images/product9.png" },
  { id: 10, name: "safe clean", image: "/images/product10.png" },
  { id: 11, name: "orange cal", image: "/images/product11.png" },
  { id: 12, name: "fast out-s", image: "/images/product12.png" },
  { id: 13, name: "moxee", image: "/images/product13.png" },
  { id: 14, name: "n-power", image: "/images/product14.png" },
  { id: 16, name: "cipy", image: "/images/product16.png" },
  { id: 17, name: "o-mectin l.a.", image: "/images/product17.png" },
  { id: 18, name: "o-cal", image: "/images/product18.png" },
  { id: 19, name: "o-mectin", image: "/images/product19.png" },
  { id: 20, name: "osophos", image: "/images/product20.png" },
  { id: 21, name: "o-cef plus", image: "/images/product21.png" },
  { id: 22, name: "cynomin b-complex", image: "/images/product22.png" },
  { id: 23, name: "oprogest-c", image: "/images/product23.png" },
  { id: 24, name: "resulto", image: "/images/product24.png" },
  { id: 25, name: "superb", image: "/images/product25.png" },
  { id: 26, name: "mastistop", image: "/images/product26.png" },
  { id: 27, name: "fintraz", image: "/images/product27.png" },
  { id: 28, name: "gel powder", image: "/images/product28.png" },
  { id: 29, name: "magic bricks", image: "/images/product29.png" },
  { id: 30, name: "shooter", image: "/images/product30.png" },

];


const Products = () => {
  return (
    <div className="container mx-auto mt-15 py-8">
      <h1 className="text-5xl mb-2 text-center font-bold">Our Popular Products</h1>
      <p className="text-gray-600 text-center mb-20">
        With constant innovation and understanding of specific market needs,
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {products.map((product) => (
          <Link to="/ProductDetails" >
              <div key={product.id} className="text-center cursor-pointer mb-8 transform transition duration-300 hover:scale-110 uppercase ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="mx-auto mb-2 w-24 h-50 object-contain drop-shadow-lg"
                />
                <p className="text-lg font-semibold">{product.name}</p>
              </div>
          </Link>
        
        ))}
      </div>
    </div>
  );
};


export default Products;
