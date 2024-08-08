'use client';
import Image from 'next/image';
import React, { FC } from 'react';

interface HeaderProps {
  // Define props here
}

const Header: FC<HeaderProps> = ({ }) => {
    return (
        <div className='p-4 mb-8 border-b border-border flex flex-row items-center justify-between'>
            <div>
            <Image
                src="/icon_dekorin.png"
                width={150}
                height={100}
                alt="Picture of the author"
                />
            </div>
            <div>
                Menu
            </div>
        </div>
    );
};

export default Header;