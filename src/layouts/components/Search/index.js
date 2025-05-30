import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import classNames from 'classnames/bind';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import * as searchServices from '~/Services/searchServices';

const cx = classNames.bind(styles);

function Search() {
   const [searchValue, setSearchValue] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [showResult, setshowResult] = useState(false);
   const [loading, setLoading] = useState(false);

   const debouncedValue = useDebounce(searchValue, 500);
   const inputRef = useRef();

   useEffect(() => {
      if (!debouncedValue.trim()) {
         setSearchResult([]);
         return;
      }

      const fetchApi = async () => {
         setLoading(true);
         const result = await searchServices.search(debouncedValue);
         setSearchResult(result);
         setLoading(false);
      };
      fetchApi();
   }, [debouncedValue]);

   const handleClickOutside = () => {
      setshowResult(false);
   };
   const handleClear = () => {
      setSearchValue('');
      setSearchResult([]);
      inputRef.current.focus();
   };
   const handleChange = (e) => {
      const searchValue = e.target.value;
      if (!searchValue.startsWith(' ')) {
         setSearchValue(e.target.value);
      }
   };

   return (
      <div>
         <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
               <div className={cx('search-result')} tabIndex="-1 " {...attrs}>
                  <PopperWrapper>
                     <h4 className={cx('search-title')}>Accounts</h4>
                     {searchResult.map((result) => (
                        <AccountItem key={result.id} data={result} />
                     ))}
                  </PopperWrapper>
               </div>
            )}
            onClickOutside={handleClickOutside}
         >
            <div className={cx('search')}>
               <input
                  ref={inputRef}
                  value={searchValue}
                  placeholder="Search..."
                  spellCheck={false}
                  onChange={handleChange}
                  onFocus={() => {
                     setshowResult(true);
                  }}
               ></input>
               {!!searchValue && !loading && (
                  <button className={cx('clear')} onClick={handleClear}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
               )}

               {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
               <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                  <SearchIcon />
               </button>
            </div>
         </HeadlessTippy>
      </div>
   );
}

export default Search;
