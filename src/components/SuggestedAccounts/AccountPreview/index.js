import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
console.log(cx('follow-btn'));
function AccountPreview() {
   return (
      <div className={cx('wrapper')}>
         <div className={cx('header')}>
            <img
               className={cx('avatar')}
               src="http://localhost:3000/static/media/avatar.d86654cb1b1af45c079a.jpg"
               alt=""
            />
            <Button className={cx('follow-btn')} primary small>
               Follow
            </Button>
         </div>
         <div className={cx('info-account')}>
            <p className={cx('nickname')}>
               <strong>quanmini</strong>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <p className={cx('name')}>Phan Hoang Quan</p>
            <p className={cx('analytics')}>
               <strong className={cx('value')}>8.2M</strong>
               <span className={cx('label')}>Followers</span>
               <strong className={cx('value')}>8.2M</strong>
               <span className={cx('label')}>Likes</span>
            </p>
         </div>
      </div>
   );
}

export default AccountPreview;
