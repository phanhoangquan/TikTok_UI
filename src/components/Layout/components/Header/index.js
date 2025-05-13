import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleQuestion,
   faCircleXmark,
   faCloudUpload,
   faCoins,
   faEarthAsia,
   faEllipsisVertical,
   faGear,
   faKeyboard,
   faMagnifyingGlass,
   faSignOut,
   faSpinner,
   faUser,
} from '@fortawesome/free-solid-svg-icons';

import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';

import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'Tiếng Việt',
      children: {
         title: 'Language',
         data: [
            {
               type: 'language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
            {
               type: 'language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'language',
               code: 'fi',
               title: 'Suomi', // Finland
            },
            {
               type: 'language',
               code: 'no',
               title: 'Norsk', // Norway
            },
            {
               type: 'language',
               code: 'se',
               title: 'Svenska', // Sweden
            },
            {
               type: 'language',
               code: 'dk',
               title: 'Dansk', // Denmark
            },
            {
               type: 'language',
               code: 'ch',
               title: 'Schweizerdeutsch', // Switzerland (Swiss German)
            },
            {
               type: 'language',
               code: 'nl',
               title: 'Nederlands', // Netherlands
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faCircleQuestion} />,
      title: 'Feedback and Help',
      to: '/feedback',
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keybroad shortcuts',
   },
];

function Header() {
   const [searchResult, setSearchResult] = useState([]);
   const currentUser = true;

   useEffect(() => {
      setTimeout(() => {
         setSearchResult([]);
      }, 0);
   }, []);

   //Handle Logic
   const handleMenuChange = (menuItem) => {
      switch (menuItem.type) {
         case 'language':
            //Handle change language
            break;
         default:
      }
   };

   const userMenu = [
      {
         icon: <FontAwesomeIcon icon={faUser} />,
         title: 'View Profile',
         to: '/@hoaa',
      },
      {
         icon: <FontAwesomeIcon icon={faCoins} />,
         title: 'Get coins',
         to: '/coin',
      },
      {
         icon: <FontAwesomeIcon icon={faGear} />,
         title: 'Settings',
         to: '/settings',
      },
      ...MENU_ITEMS,
      {
         icon: <FontAwesomeIcon icon={faSignOut} />,
         title: 'Log Out',
         to: '/logout',
         separate: true,
      },
   ];

   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('logo')}>
               <img className={cx('logo_tiktok')} src={images.tiktok_black} alt="TikTok" />
            </div>
            <HeadlessTippy
               interactive
               visible={searchResult.length > 0}
               render={(attrs) => (
                  <div className={cx('search-result')} tabIndex="-1 " {...attrs}>
                     <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                     </PopperWrapper>
                  </div>
               )}
            >
               <div className={cx('search')}>
                  <input placeholder="Search..."></input>
                  <button className={cx('clear')}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                  <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                  <button className={cx('search-btn')}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
            </HeadlessTippy>

            <div className={cx('action')}>
               {currentUser ? (
                  <>
                     <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                        <button className={cx('action-btn')}>
                           <FontAwesomeIcon icon={faCloudUpload} />
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <>
                     <Button text>Upload</Button>
                     <Button primary>Log in</Button>
                  </>
               )}
               <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                  {currentUser ? (
                     <div>
                        <img
                           className={cx('user-avatar')}
                           alt="User_avatar"
                           src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/453212213_1206786913794514_5858085507630456444_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WelNIUfzxogQ7kNvwH0BknP&_nc_oc=AdmNLNVn--VIcfY3TG28PxaHwaFnvC3u_4mcgUQ7EGw0E4vIwmQR4HOqXTUCcJFoxpc&_nc_zt=23&_nc_ht=scontent.fdad3-1.fna&_nc_gid=Ke5OiWNFHf3kir3WQo7APQ&oh=00_AfJaPJH_DZTiqzoUTE6SE0LzOxaDY1lw8T2VFO3jWSOWmQ&oe=682872DF"
                        ></img>
                     </div>
                  ) : (
                     <div className={cx('wrap-more-btn')}>
                        <button className={cx('more-btn')}>
                           <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                     </div>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
