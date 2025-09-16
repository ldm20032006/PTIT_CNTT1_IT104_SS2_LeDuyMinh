import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

// eslint-disable-next-line react-refresh/only-export-components
const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', status: 'Trả hàng' });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3;

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) setProducts(JSON.parse(storedProducts));
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = () => {
    if (newProduct.name.trim() && newProduct.price.trim()) {
      const product: Product = {
        id: Date.now().toString(),
        name: newProduct.name,
        price: parseFloat(newProduct.price),
        status: newProduct.status,
      };
      setProducts([...products, product]);
      setNewProduct({ name: '', price: '', status: 'Trả hàng' });
    }
  };

  const toggleStatus = (id: string) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, status: product.status === 'Trả hàng' ? 'Còn hàng' : 'Trả hàng' }
          : product
      )
    );
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full bg-blue-600 text-white p-4 flex justify-center items-center">
        <span className="text-2xl font-bold">Quản lý Sản phẩm</span>
      </div>
      <div className="p-6 w-full max-w-4xl">
        <div className="bg-white p-4 rounded-lg shadow-md mb-4">
          <h2 className="text-lg font-semibold mb-2">Thêm sản phẩm mới</h2>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Tên sản phẩm"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              className="flex-1 p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Giá"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
              className="flex-1 p-2 border rounded"
            />
            <select
              value={newProduct.status}
              onChange={(e) => setNewProduct({ ...newProduct, status: e.target.value })}
              className="p-2 border rounded"
            >
              <option value="Trả hàng">Trả hàng</option>
              <option value="Còn hàng">Còn hàng</option>
            </select>
            <button
              onClick={addProduct}
              className="bg-blue-600 text-white p-2 rounded"
            >
              Thêm
            </button>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-2">Danh sách sản phẩm</h2>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2">Tên sản phẩm</th>
                <th className="p-2">Giá</th>
                <th className="p-2">Trạng thái</th>
                <th className="p-2">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="p-2">{product.name}</td>
                  <td className="p-2">{product.price.toLocaleString()} đ</td>
                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded ${
                        product.status === 'Còn hàng' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>
                  <td className="p-2">
                    <button
                      onClick={() => toggleStatus(product.id)}
                      className="bg-blue-500 text-white p-1 rounded mr-2"
                    >
                      Đánh dấu
                    </button>
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="bg-red-500 text-white p-1 rounded"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4">
            <span>Tổng: {products.length} sản phẩm</span>
            <div className="flex space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                className="p-1 bg-gray-300 rounded"
                disabled={currentPage === 1}
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`p-1 ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-300'} rounded`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                className="p-1 bg-gray-300 rounded"
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Product {
  id: string;
  name: string;
  price: number;
  status: string;
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);