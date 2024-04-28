import React from 'react';
import Image from 'next/image'; // Importe Image depuis next/image

function Header() {
    const headerMenu=[
        {id:1, name:'Voyage', icon:'/taxi.jpg'}
        
    ];

    return (
        <div className='p-4 pb-3 pl-10 border-b-4 menu'>
            <h1 className='logo'>Taxik</h1>
            <div className='flex-gap-6 items-center'>
                {headerMenu.map((item) => (
                    <div className='flex gap-2 items-center' key={item.id}> {/* Ajout de la clé key */}
                        <Image src={item.icon} width={25} height={17} />
                        <h2 className='text-[14px] font-medium'>
                            {
                                item.name
                            }
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Header;
