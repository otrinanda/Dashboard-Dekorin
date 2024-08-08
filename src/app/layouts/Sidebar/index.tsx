'use client';
import { Button } from '@/components/ui/button';
import React, { FC } from 'react';
import { PiHouse, PiMoneyWavy, PiArmchair, PiImages, PiNewspaper, PiGear, PiSignOut, PiUserCircle } from 'react-icons/pi';

interface SidebarProps {
  // Define props here
}

const Sidebar: FC<SidebarProps> = ({ }) => {
  return (
    <div className='pb-12 min-h-screen'>
        <div className="space-y-4 py-4" >
            <div className="px-3 py-2">
                <h2 className='mb-2 px-4 text-lg font-semibold'>
                    Dashboard
                </h2>
                <div className="space-y-3">
                    <Button
                        variant={"ghost"}
                        className=' gap-4 w-full justify-start rounded-none hover:text-primary hover:bg-primary/5'>
                            <PiHouse className='text-2xl' />
                            Home
                    </Button>
                    <Button
                        variant={"ghost"}
                        className=' gap-4 w-full justify-start rounded-none hover:text-primary hover:bg-primary/5'>
                            <PiMoneyWavy  className='text-2xl' />
                            Transactions
                    </Button>
                    <Button
                        variant={"ghost"}
                        className=' gap-4 w-full justify-start rounded-none hover:text-primary hover:bg-primary/5'>
                            <PiNewspaper  className='text-2xl' />
                            Report
                    </Button>
                    <Button
                        variant={"ghost"}
                        className=' gap-4 w-full justify-start rounded-none hover:text-primary hover:bg-primary/5'>
                            <PiArmchair  className='text-2xl' />
                            Product List
                    </Button>
                    <Button
                        variant={"ghost"}
                        className=' gap-4 w-full justify-start rounded-none hover:text-primary hover:bg-primary/5'>
                            <PiImages  className='text-2xl' />
                            Banner List
                    </Button>
                </div>
            </div>
        </div>
        <div className="space-y-4 py-4" >
            <div className="px-3 py-2">
                <h2 className='mb-2 px-4 text-lg font-semibold'>
                    Profile
                </h2>
                <div className="space-y-3">
                    <Button
                        variant={"ghost"}
                        className=' gap-4 w-full justify-start rounded-none hover:text-primary hover:bg-primary/5'>
                            <PiGear className='text-2xl' />
                            Settings
                    </Button>
                    <Button
                        variant={"ghost"}
                        className=' gap-4 w-full justify-start rounded-none cursor-pointer hover:text-primary hover:bg-primary/5'>
                            <PiUserCircle   className='text-2xl' />
                            Profile
                    </Button>
                    <Button
                        variant={"ghost"}
                        className=' gap-4 w-full justify-start rounded-none cursor-pointer
                        text-red-500 hover:text-red-200 hover:bg-red-50'>
                            <PiSignOut  className='text-2xl' />
                            Log Out
                    </Button>
                </div>
            </div>
        </div>
      Sidebar Here
    </div>
  );
};

export default Sidebar;