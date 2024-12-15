// src/components/Profile.tsx

const Profile = () => {

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <div className="bg-gray-800 p-6 rounded-lg max-w-2xl">
        <div className="flex items-center mb-6">
          <div className="w-20 h-20 bg-gray-700 rounded-full"></div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-400">john.doe@example.com</p>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              className="w-full bg-gray-700 rounded p-2"
              defaultValue="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full bg-gray-700 rounded p-2"
              defaultValue="john.doe@example.com"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile