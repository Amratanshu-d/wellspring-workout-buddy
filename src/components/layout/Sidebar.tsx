
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Users, Activity, Dumbbell, User, Search, Settings, Bell } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className="hidden sm:flex flex-col w-64 h-screen bg-white border-r border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-10 h-10 rounded-lg bg-fitness-blue flex items-center justify-center">
          <Dumbbell size={24} className="text-white" />
        </div>
        <h1 className="text-xl font-bold">Wellspring</h1>
      </div>
      
      <div className="flex flex-col gap-1 mb-8">
        <SidebarItem icon={<Home size={20} />} label="Home" to="/" />
        <SidebarItem icon={<Users size={20} />} label="Friends" to="/friends" />
        <SidebarItem icon={<Dumbbell size={20} />} label="Workouts" to="/workout" />
        <SidebarItem icon={<Activity size={20} />} label="Progress" to="/progress" />
        <SidebarItem icon={<Search size={20} />} label="Discover" to="/discover" />
      </div>
      
      <div className="mt-auto flex flex-col gap-1">
        <SidebarItem icon={<Bell size={20} />} label="Notifications" to="/notifications" />
        <SidebarItem icon={<Settings size={20} />} label="Settings" to="/settings" />
        <SidebarItem icon={<User size={20} />} label="Profile" to="/profile" />
      </div>
    </aside>
  );
};

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  to: string;
};

const SidebarItem = ({ icon, label, to }: SidebarItemProps) => {
  return (
    <Link 
      to={to} 
      className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-fitness-blue transition-colors"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

export default Sidebar;
