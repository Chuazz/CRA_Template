// Framework
import clsx from 'clsx';

// Style
import styles from './Header.module.scss';

const cx = clsx.bind(styles);

function Header() {
    return (
        <div className={cx("container")}>
            <p>Header</p>
        </div>
    );
}

export default Header;
