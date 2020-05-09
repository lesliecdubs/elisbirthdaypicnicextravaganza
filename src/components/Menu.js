import React from 'react';
import _ from 'lodash';

import {Link, safePrefix} from '../utils';

export default class Menu extends React.Component {
    render() {
        return (
            <nav id="menu">
                <div className="inner">
                    <h2>Menu</h2>
                    <ul>
                        {_.map(_.get(this.props, 'pageContext.menus.main'), (item, item_idx) => (
                            <li key={item_idx}><Link to={safePrefix(_.get(item, 'url'))}>{_.get(item, 'title')}</Link></li>
                        ))}
                    </ul>
                </div>
                <Link className="close" to="#menu">Close</Link>
            </nav>
        );
    }
}
