import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleQuestion,
   faCoins,
   faEarthAsia,
   faEllipsisVertical,
   faGear,
   faKeyboard,
   faSignOut,
   faUser,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';

import styles from './Header.module.scss';
import images from '~/assets/images';

import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';

import { MessageIcon, NotificationIcon, UploadIcon } from '~/components/Icons';

import Search from '../Search';
import config from '~/config';

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
   const currentUser = true;

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
               <Link to={config.routes.home} className={cx('logo-link')}>
                  <img className={cx('logo_tiktok')} src={images.tiktok_black} alt="TikTok" />
               </Link>
            </div>

            <Search />

            <div className={cx('action')}>
               {currentUser ? (
                  <>
                     <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                        <button className={cx('action-btn')}>
                           <UploadIcon />
                        </button>
                     </Tippy>
                     <button className={cx('action-btn-message')}>
                        <MessageIcon />
                     </button>
                     <button className={cx('action-btn')}>
                        <NotificationIcon />
                        {/* Copy_from_tiktok */}
                        <p className={cx('result-notification')}>17</p>
                        {/* Copy_from_tiktok */}
                     </button>
                  </>
               ) : (
                  <>
                     <Button text>Upload</Button>
                     <Button primary>Log in</Button>
                  </>
               )}
               <Menu hideOnClick={false} items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                  {currentUser ? (
                     <Image className={cx('user-avatar')} alt="User_avatar" src={images.avatar}></Image>
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
