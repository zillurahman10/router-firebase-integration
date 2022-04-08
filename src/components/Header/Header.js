import React from 'react';
import './Header.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Header = () => {

    function CustomLink({ children, to, ...props }) {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });

        return (
            <div>
                <Link
                    style={{ color: match ? "goldenrod" : "black" }}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }

    return (
        <div className='nav'>
            <div className='main'>
                <div className='logo'>
                    <img className='logo-g' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEMAAABDCAMAAADwFEhBAAABF1BMVEX////qQzU0qFNChfT7vAUhd/M2f/Stxfk9g/T7uQDpOCdunfYwp1DpOirqPzDtaWAkpEnpMyH7397pLhose/Pl7P0RoT/51dPoKhP+9/fyl5HpNzf81IXpPTb95br8wwD8yl3+7c/925r7wDP/+/T9147+9eT94az+8dre5/3y9f6Rs/jy+PMzqkFCgvycz6fd7uFGrWD1tbHve3PrUETsWU/whX/zoJv3wb70qaX86ejsYVfoGwD0n3noLi71lxz5rxHuZC3yhiL3pRfsVTDwdyhek/W6siSJx5e90PqRsENZqkyp1LLUtySqsjZwrEjnuhmuxYG11c3K5NBZs243o3dBjN48lbc5no81pWU/kM06mqJyvYMDDFvWAAADGElEQVRYha2UaXuaQBSFh5EQQcBBDKBZTLqkdYuiGJOYNulmTEtXTdf8/99REJcZmAEkOR/8APg+5557ZgBgqmL2qv2Rw3HcoHg6PLtgf8lQaTiwdElRVc6XqiqapfbPKhsQeo4uBf/GpWpa30wHqAxpgECKNUpDOZckBiAwYxWTkik5WhwhoAxjEUOLNQUubRQTbjHRxCIWpcQgVBwlHcLTJT3aCyXNHIGkIt2F+nAE92AEGNGy8Cqu6bquSUoaRDW6EVW6HFR7plkyz877mq4kIUwrQtAHPbwF5qmmxCJAJAvNiSyvUvULyERUQ0dEtc5pn5U4hYm4CE2icqwaFlkI8Oo1gVCcTe6aQMf81S7uwtmYAMCeWLvm9tc2NncBgMh7erO0YqW87ggdzBm1twFEqmZAgEN+rtq7fX8eKQsiGMWX+H6fk6jFSNLRisHXPuxms/FkzeBrV5nSWMax0FEmxlOCQflgvBWrHMAi9XVIYRTyuVgB8AxniM83Z5S9w0IwXmRgNMBLgnGQgbETYtDWksSoP4KP+iPkUX+Evew8vB/eXpJ7mtwP8rzQFlMQwiIhgDy3/M0kyrjdDmuMEfIFQNwf/EeIKMNEhLvIN/0na8YnCJGbjKiXMYZwC7BAPkNfKYw08ZD91S7vdf4LDBiUREg1yEyDhx5D5L/ChYzpJjaEZvBwT+S/wbVQKxZBpOE3fa5j8QZDQNmOnYRsXH75/DuCJITtpJEjGML28kXLgCQEdhmIHRKRExqrVxMUghj0mvzYCiGa2EtZJiEQ2dH1TGfGHemj3MBfh6bxrdguHkvLtQ0ZIvjzhJYGdRqfggx74k673e7UndgGmluV279WkPw4ZHQWnibAIGQYhve7ftv+LeTxmuNeIQ1CE/oznre9vA3CakVyZUlu/z0J7WQFQWkhsP3vRChQEB7EjgbLgtzRXMx1H1kxQ0bMDdEx0szDqvFC3RTzoJgzGchF8RSU5sptdQzmhrzudpJMLL3YNIxf/hQeVup2Zl7H5UXvZNnv/KzDulbYM3lH7X5mewh7dt9x2f//DzRTVRglSbJDAAAAAElFTkSuQmCC" alt="" />
                </div>
                <div className='header'>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/products">Products</CustomLink>
                    <CustomLink to="/orders">Orders</CustomLink>
                    <CustomLink to="/register">Register</CustomLink>
                    <CustomLink to="/login">Login</CustomLink>
                </div>
            </div>
        </div>
    );
};

export default Header;