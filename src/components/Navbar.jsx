import { Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpIcon from '@mui/icons-material/Help';
import Toggle from '../darkmode/Toggle';

const Navbar = () => {
  const location = useLocation();
  const [openModal, setOpenModal] = useState(null); // Upload / Jobs / Organise / null
  const [organiseDropdowns, setOrganiseDropdowns] = useState({}); // Track dropdowns in Organise modal

  const modalRefs = {
    Upload: useRef(null),
    Jobs: useRef(null),
    Organise: useRef(null)
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Search', path: '/search' },
    { name: 'Browse', path: '/browse' },
    { name: 'Upload', modal: true },
    { name: 'Jobs', modal: true },
    { name: 'Organise', modal: true }
  ];

  const toggleModal = (name) => {
    setOpenModal(prev => (prev === name ? null : name));
  };

  const toggleOrganiseDropdown = (section) => {
    setOrganiseDropdowns(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      const ref = modalRefs[openModal];
      if (ref && ref.current && !ref.current.contains(event.target)) {
        setOpenModal(null);
        setOrganiseDropdowns({});
      }
    };
    if (openModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openModal]);

  return (
    <div className="relative">
      <div className="flex flex-row lg:p-5 p-4 bg-black items-center justify-between text-white">
        <div className="left flex gap-20">
          {/* <div className="logo bg-black flex items-center">logo</div> */}
          <img src="logo.svg" className='w-19' alt="" />
          <div className="lg:flex hidden lg:gap-8 font-semibold cursor-pointer">
            {navItems.map((item) => (
              item.modal ? (
                <div key={item.name} className="relative">
                  <div
                    onClick={() => toggleModal(item.name)}
                    className="p-2 relative hover:bg-zinc-950 rounded flex items-center gap-1"
                  >
                    {item.name}
                    <span
                      className={`transition-transform duration-100 ${openModal === item.name ? 'rotate-180' : 'rotate-0'
                        }`}
                    >

                      <KeyboardArrowDownIcon className="transition-transform duration-100" />
                    </span>
                  </div>

                  {openModal === item.name && item.name !== 'Organise' && (
                    <div
                      ref={modalRefs[item.name]}
                      className="absolute top-full left-0 mt-1 w-56 bg-white text-black rounded shadow-lg z-50 p-4"
                    >
                      <p>This is a modal for {item.name}</p>
                    </div>
                  )}

                  {/* Organise Modal */}
                  {openModal === 'Organise' && item.name === 'Organise' && (
                    <div
                      ref={modalRefs.Organise}
                      className="absolute top-full left-0 mt-1 w-64 bg-white text-black rounded shadow-lg z-50 p-4 space-y-2"
                    >
                      <button
                        className="w-full flex justify-between items-center p-2 hover:bg-gray-100 rounded"
                        onClick={() => toggleOrganiseDropdown('folders')}
                      >
                        Create Folder
                        <span
                          className={`transition-transform duration-100 ${organiseDropdowns.folders ? 'rotate-180' : ''
                            }`}
                        >
                          <KeyboardArrowDownIcon className="transition-transform duration-100" />

                        </span>
                      </button>
                      {organiseDropdowns.folders && (
                        <div className="pl-4 text-sm text-gray-600 space-y-1">
                          <p>📁 New Folder</p>
                          <p>🗂️ Sub-folder</p>
                        </div>
                      )}

                      <button
                        className="w-full flex justify-between items-center p-2 hover:bg-gray-100 rounded"
                        onClick={() => toggleOrganiseDropdown('projects')}
                      >
                        Manage Projects
                        <span
                          className={`transition-transform duration-100 ${organiseDropdowns.projects ? 'rotate-180' : ''
                            }`}
                        >
                          <KeyboardArrowDownIcon className="transition-transform duration-100" />

                        </span>
                      </button>
                      {organiseDropdowns.projects && (
                        <div className="pl-4 text-sm text-gray-600 space-y-1">
                          <p>📋 Project A</p>
                          <p>📋 Project B</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.path}
                  key={item.name}
                  className="p-2 relative hover:bg-zinc-950 rounded"
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <span className="absolute left-1/2 -bottom-0.5 w-full h-0.5 custom-orange-gradient transform -translate-x-1/2 "></span>
                  )}
                </Link>
              )
            ))}
          </div>
        </div>

        <div className="gap-5 lg:flex hidden p-1 items-center">
          <Toggle className="cursor-pointer "/>
           <HelpIcon className='cursor-pointer'/>
          <AccountCircleIcon className='cursor-pointer'/>
        </div>



  {/* for mobiles */}

        <div className="menu flex lg:hidden">
            <MenuIcon className='flex lg:hidden ' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
