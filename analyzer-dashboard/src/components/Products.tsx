
const Products = () => {

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Product {item}</h3>
            <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products