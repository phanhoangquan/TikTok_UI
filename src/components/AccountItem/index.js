import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountItem() {
   return (
      <div className={cx('wrapper')}>
         <Image
            className={cx('avatar')}
            src="https://www.buildabear.com/dw/image/v2/BBNG_PRD/on/demandware.static/-/Sites-buildabear-master/default/dw02564c9b/34230700232069x20042065.jpg?sw=800&sh=800&sm=fit"
            alt="AccountName"
         ></Image>
         <div className={cx('info')}>
            <p className={cx('name')}>
               <span>Nguyen Van A</span>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <span className={cx('username')}>nguyenvana</span>
         </div>
      </div>
   );
}

export default AccountItem;
