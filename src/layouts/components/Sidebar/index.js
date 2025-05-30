import config from '~/config';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu from './Menu';
import { MenuItem } from './Menu';
import { HomeIcon, LiveIcon, FollowingIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
   return (
      <aside className={cx('wrapper')}>
         <Menu>
            <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} />
            <MenuItem title="Following" to={config.routes.following} icon={<FollowingIcon />} />
            <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
         </Menu>
      </aside>
   );
}

export default Sidebar;
