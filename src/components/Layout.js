import React from 'react';
import {Helmet} from 'react-helmet';
import _ from 'lodash';

import {safePrefix} from '../utils';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

export default class Body extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <title>{_.get(this.props, 'pageContext.frontmatter.title') && _.get(this.props, 'pageContext.frontmatter.title') + ' - '}{_.get(this.props, 'pageContext.site.siteMetadata.title')}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initialScale=1, userScalable=no" />
                    <link rel="stylesheet" href={safePrefix('assets/css/main.css')} />
                    <link rel="stylesheet" href={safePrefix('assets/css/markdown-images.css')} />
                    <noscript>{`<link rel="stylesheet" href=${safePrefix('assets/css/noscript.css')} />`}</noscript>
                </Helmet>
                    <div id="wrapper">
                        <Header {...this.props} />
                        <div id="main">
                            <div className="inner">
                                {this.props.children}
                            </div>
                        </div>
                        <Footer {...this.props} />
                    </div>
                    <Menu {...this.props} />
            </React.Fragment>
        );
    }
}
