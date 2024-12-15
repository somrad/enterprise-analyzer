// src/components/Layout.tsx
import React,  {  useState, useContext } from 'react'
import { Home as HomeIcon, User as UserIcon, Package as PackageIcon, 
  ChevronLeft, Settings as SettingsIcon , ChevronRight, LogOutIcon as OutIcon } from 'lucide-react'
import Dashboard from './Dashboard'
import Products from './Products'
import Profile from './Profile'
import CalculatorComponent from './CalculatorComponent'


// const Home = () as ForwardRefExoticComponent<LucideProps & RefAttributes<SVGSVGElement>>;

interface MenuItem {
  id: string
  label: string
  icon: typeof HomeIcon | typeof UserIcon | typeof PackageIcon | typeof SettingsIcon
  component: React.FC
}



// interface MenuItem {
//   id: string
//   label: string
//   // icon: React.FC<{ size?: number }>
//   component: React.FC
// }

const Layout = (name) => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [activeContent, setActiveContent] = useState('home')
  const username = name.name
  console.log('in layout:')
  console.log(name)
  const menuItems: MenuItem[] = [
    { id: 'home', label: 'Dashboard', icon: HomeIcon,  component: Dashboard },
    { id: 'products', label: 'Products', icon: PackageIcon ,component: Products },
    { id: 'profile', label: 'Profile', icon: UserIcon ,component: Profile },
    { id: 'Calculator', label: 'Settings', icon: SettingsIcon ,component: CalculatorComponent },
    { id: 'logout', label: 'Logout', icon: OutIcon ,component: Dashboard }

  ]

  const ActiveComponent = menuItems.find(item => item.id === activeContent)?.component || Dashboard

  return (
    <div className={`min-h-screen 'bg-gray-100'} flex`}>
      {/* Sidebar */}
      <div
        className={`${
          isCollapsed ? 'w-16' : 'w-64'
        }  'bg-white'} transition-all duration-300 ease-in-out flex flex-col shadow-lg`}
      >
        {/* Toggle button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`p-4 'hover:bg-gray-100 text-gray-800'} flex items-center justify-center`}
        >
          {isCollapsed ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
        </button>

        {/* Navigation items */}
        <nav className="flex-1">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveContent(item.id)}
                className={`w-full p-4 flex items-center 'hover:bg-gray-100 text-gray-800'
                } ${
                  activeContent === item.id 
                    ? 'bg-gray-100'
                    : ''
                }`}
              >
                <Icon size={24} />
                {!isCollapsed && <span className="ml-4">{item.label}</span>}
              </button>
            )
          })}
        
        <button
            className={`w-full p-4 flex items-center hover:bg-gray-100 text-gray-800`}
          >
            <UserIcon size={24} />
            {!isCollapsed && (
              <span className="ml-4">{username}</span>
            )}
          </button>
        </nav>

        {/* Display username at the bottom */}
        <div className={`p-4 flex items-center justify-between text-gray-800`}>
          {isCollapsed ? null : (
            <span>{username}</span>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <ActiveComponent />
      </div>
    </div>
  )
}

export default Layout