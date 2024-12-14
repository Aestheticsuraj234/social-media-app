import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { PlusSquare, LogOut } from 'lucide-react';

export default function TopBar() {
 

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-background border-b">
      <Link to="/" className="flex items-center gap-2">
        <h1 className="text-xl font-bold">Social App</h1>
      </Link>

      <div className="flex items-center gap-4">
        <Link to="/create-post">
          <Button variant="ghost" size="icon">
            <PlusSquare className="w-5 h-5" />
          </Button>
        </Link>
        
        <Button variant="ghost" size="icon" >
          <LogOut className="w-5 h-5" />
        </Button>
      </div>
    </nav>
  );
}