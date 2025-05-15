import images from '~/assets/images';
import { useState } from 'react';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = ({ src, alt, className, ...props }) => {
   const [avatar, setAvatar] = useState(src);

   const handleError = () => {
      setAvatar(images.noImage);
   };

   return (
      <img
         className={classNames(styles.wrapper, className)}
         src={avatar}
         alt={alt}
         {...props}
         onError={handleError}
      ></img>
   );
};

export default Image;
