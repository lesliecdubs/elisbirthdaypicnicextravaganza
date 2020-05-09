import React from 'react';
import _ from 'lodash';

import {Link, safePrefix} from '../utils';

export default class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link to={safePrefix('/')} className="logo">
                        <span className="symbol"><img src={safePrefix(_.get(this.props, 'pageContext.site.data.header.logo_img_src'))} alt="" /></span><span className="title">{_.get(this.props, 'pageContext.site.siteMetadata.title')}</span>
                    </Link>
                    <nav>
                        <ul>
                            <li><Link to="#menu">Menu</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}
