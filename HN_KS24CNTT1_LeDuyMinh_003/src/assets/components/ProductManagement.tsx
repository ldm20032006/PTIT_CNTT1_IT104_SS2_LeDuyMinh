import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  price: number;
  status: string;
}

export default function ProductManagement() {
  const [products, setProducts] = useState<Product[]>([
    { id: '1', name: 'Laptop Dell XPS 13', price: 29990000, status: 'Còn hàng' },
    { id: '2', name: 'Chuột Logitech MX Master 3S', price: 2490000, status: 'Hết hàng' },
    { id: '3', name: 'Bàn phím Keychron K6', price: 2190000, status: 'Còn hàng' }
  ]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', status: 'Còn hàng' });
  const [currentPage] = useState(1);
  const productsPerPage = 3;

  const addProduct = () => {
    if (newProduct.name.trim() && newProduct.price.trim()) {
      const product: Product = {
        id: Date.now().toString(),
        name: newProduct.name,
        price: parseFloat(newProduct.price),
        status: newProduct.status,
      };
      setProducts([...products, product]);
      setNewProduct({ name: '', price: '', status: 'Còn hàng' });
    }
  };

  const toggleStatus = (id: string) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, status: product.status === 'Hết hàng' ? 'Còn hàng' : 'Hết hàng' }
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Quản lý Sản phẩm</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Add Product Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-center mb-6">
            <span className="text-blue-600 text-lg mr-2">+</span>
            <h2 className="text-lg font-semibold text-gray-700">Thêm sản phẩm mới</h2>
          </div>
          
          <div className="flex flex-wrap gap-4 items-end">
            <div className="flex-1 min-w-0">
              <input
                type="text"
                placeholder="Tên sản phẩm"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex-1 min-w-0">
              <input
                type="text"
                placeholder="Giá (đ)"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="status"
                checked={newProduct.status === 'Còn hàng'}
                onChange={(e) => setNewProduct({ 
                  ...newProduct, 
                  status: e.target.checked ? 'Còn hàng' : 'Hết hàng' 
                })}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="status" className="ml-2 text-sm text-gray-700 whitespace-nowrap">
                Còn hàng
              </label>
            </div>
            <button
              onClick={addProduct}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Thêm
            </button>
          </div>
        </div>

        {/* Product List Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center justify-center">
              <span className="text-orange-500 text-lg mr-2">📋</span>
              <h2 className="text-lg font-semibold text-gray-700">Danh sách sản phẩm</h2>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tên sản phẩm
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Giá
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Trạng thái
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {product.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 font-semibold">
                      {product.price.toLocaleString()} đ
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${
                        product.status === 'Còn hàng' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm space-x-2">
                      <button
                        onClick={() => toggleStatus(product.id)}
                        className="bg-blue-100 hover:bg-blue-200 text-blue-600 px-3 py-1 rounded-md text-xs font-medium transition-colors"
                      >
                        Đánh dấu
                      </button>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1 rounded-md text-xs font-medium transition-colors"
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer with pagination */}
          <div className="bg-gray-50 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Tổng: {products.length} sản phẩm
              </div>
              
              <div className="flex items-center space-x-1">
                <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
                  &lt;
                </button>
                
                <button className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white text-sm rounded">
                  1
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-sm rounded">
                  2
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-sm rounded">
                  3
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-sm rounded">
                  4
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-sm rounded">
                  5
                </button>
                
                <span className="text-gray-400 px-1">...</span>
                
                <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 text-sm rounded">
                  54
                </button>
                
                <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
                  &gt;
                </button>
                
                <span className="text-sm text-gray-500 ml-2">/ page</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}