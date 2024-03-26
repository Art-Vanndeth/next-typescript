
'use client';

import { Sidebar } from 'flowbite-react';
import { BiBuoy } from 'react-icons/bi';
import Link from 'next/link';
import { MenuList } from './menu';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import React, { useState } from 'react';

type MenuItem = {
  name: string,
  path: string,
  icon: React.ElementType;
}

export default function SidebarComponent() {

  const [menuList, setMenuList] = useState<MenuItem[]>(MenuList);

  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {menuList.map((item, index) => (
            <Sidebar.Item
              key={index}
              as={Link}
              href={item.path}
              icon={item.icon}
            >{item.name}</Sidebar.Item>
          ))}
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
