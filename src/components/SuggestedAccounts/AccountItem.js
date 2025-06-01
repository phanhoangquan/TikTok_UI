import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

const renderPreview = (props) => {
   return (
      <div className={cx('preview')} tabIndex="-1 " {...props}>
         <PopperWrapper>
            <AccountPreview />
         </PopperWrapper>
      </div>
   );
};

function AccountItem() {
   return (
      <div>
         <Tippy interactive offset={[-40, 0]} delay={[800, 0]} placement="bottom" render={renderPreview}>
            <div className={cx('account-item')}>
               <img
                  className={cx('avatar')}
                  src="http://localhost:3000/static/media/avatar.d86654cb1b1af45c079a.jpg"
                  alt=""
               />
               <div className={cx('item-info')}>
                  <p className={cx('nickname')}>
                     <strong>quanmini</strong>
                     <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                  </p>
                  <p className={cx('name')}>Phan Hoang Quan</p>
               </div>
            </div>
         </Tippy>
      </div>
   );
}

export default AccountItem;
