import { Component } from "react";
import { products, type Product } from "./product.data";
import "./index.css";

interface CartItem extends Product {
  quantity: number;
}

interface State {
  cart: CartItem[];
  showCart: boolean;
}

export default class Store extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      cart: JSON.parse(localStorage.getItem("cart") || "[]"),
      showCart: false,
    };
  }

  saveCart(cart: CartItem[]) {
    localStorage.setItem("cart", JSON.stringify(cart));
    this.setState({ cart });
  }

  addToCart = (product: Product) => {
    const { cart } = this.state;
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      if (existing.quantity < product.stock) {
        existing.quantity++;
        this.saveCart([...cart]);
      } else {
        alert("Số lượng sản phẩm trong kho không đủ");
      }
    } else {
      this.saveCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  toggleCart = () => {
    this.setState({ showCart: !this.state.showCart });
  };

  render() {
    return (
      <div style={{ padding: "20px" }}>
        <h1>Shop Online</h1>
        <button className="btn btn-primary" onClick={this.toggleCart}>
          🛒 Giỏ hàng ({this.state.cart.length})
        </button>

        {this.state.showCart && (
          <div className="cart-popup">
            <h3>Giỏ hàng</h3>
            {this.state.cart.length === 0 ? (
              <p>Chưa có sản phẩm nào</p>
            ) : (
              this.state.cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>{item.price.toLocaleString()}đ</span>
                </div>
              ))
            )}
          </div>
        )}

        <div className="product-list">
          {products.map((p) => (
            <div className="product-card" key={p.id}>
              <img src={p.image} alt={p.name} />
              <h4>{p.name}</h4>
              <p>{p.price.toLocaleString()}đ</p>
              <p>Còn lại: {p.stock}</p>
              <button
                className="btn btn-success"
                onClick={() => this.addToCart(p)}
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}