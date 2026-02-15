'use client'
import Link from 'next/link';


import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {
  const path = usePathname();
  return (
    
     <Link
  href={href}
  className={`
    px-3 py-2 rounded-md font-medium transition-colors duration-200
    ${
      path.startsWith(href)
        ? "text-base-600"
        : "text-base-content hover:text-emerald-500"
    }
  `}
>
  {children}
</Link>

  
  );
};

export default NavLink;