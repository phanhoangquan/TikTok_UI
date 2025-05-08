import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleQuestion,
   faCircleXmark,
   faEarthAsia,
   faEllipsisVertical,
   faKeyboard,
   faMagnifyingGlass,
   faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';
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

   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>
            <div className={cx('logo')}>
               <img className={cx('logo_tiktok')} src={images.tiktok_black} alt="TikTok" />
            </div>
            <Tippy
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
            </Tippy>
            <div className={cx('action')}>
               <Button text>Upload</Button>
               <Button primary>Log in</Button>
               <Button outline>Register</Button>

               <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                  <button className={cx('more-btn')}>
                     <FontAwesomeIcon icon={faEllipsisVertical} />
                  </button>
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
