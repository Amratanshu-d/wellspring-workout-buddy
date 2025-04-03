
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, Users, Activity, Dumbbell, User } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 sm:hidden">
      <div className="flex justify-between items-center">
        <NavItem icon={<Home size={20} />} label="Home" to="/" />
        <NavItem icon={<Users size={20} />} label="Friends" to="/friends" />
        <NavItem 
          icon={<div className="bg-fitness-blue rounded-full p-3"><Dumbbell size={24} className="text-white" /></div>} 
          label="" 
          to="/workout"
          primary
        />
        <NavItem icon={<Activity size={20} />} label="Progress" to="/progress" />
        <NavItem icon={<User size={20} />} label="Profile" to="/profile" />
      </div>
    </nav>
  );
};

type NavItemProps = {
  icon: React.ReactNode;
  label: string;
  to: string;
  primary?: boolean;
};

const NavItem = ({ icon, label, to, primary }: NavItemProps) => {
  return (
    <Link to={to} className={`flex flex-col items-center ${primary ? '' : 'text-gray-600 hover:text-fitness-blue'}`}>
      {icon}
      {label && <span className="text-xs mt-1">{label}</span>}
    </Link>
  );
};

export default Navigation;
