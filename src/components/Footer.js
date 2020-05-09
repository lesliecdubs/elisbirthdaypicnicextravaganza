import React from 'react';
import _ from 'lodash';

import Contact from './Contact';
import Social from './Social';
import {htmlToReact, Link} from '../utils';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div className="inner">
                    {_.get(this.props, 'pageContext.site.data.contact.enabled') && 
                        <Contact {...this.props} />
                    }
                    {_.get(this.props, 'pageContext.site.data.social.enabled') && 
                        <Social {...this.props} />
                    }
                    <ul className="copyright">
                        <li>
                            {htmlToReact(_.get(this.props, 'pageContext.site.data.footer.copyright'))}
                            &nbsp;
                            {_.map(_.get(this.props, 'pageContext.site.data.footer.links'), (link, link_idx) => (<React.Fragment key={link_idx}>
                                <Link key={link_idx} to={_.get(link, 'url')} {...(_.get(link, 'new_window') ? {target: '_blank', rel: 'noopener'} : null)}>{_.get(link, 'text')}</Link>.
                            </React.Fragment>))}
                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}
