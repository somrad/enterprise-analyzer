const Dashboard = () => {

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 dark:text-white text-gray-800">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2 dark:text-white text-gray-800">Total Sales</h3>
          <p className="text-2xl dark:text-white text-gray-800">$12,345</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2 dark:text-white text-gray-800">Active Users</h3>
          <p className="text-2xl dark:text-white text-gray-800">1,234</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2 dark:text-white text-gray-800">Products</h3>
          <p className="text-2xl dark:text-white text-gray-800">89</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard