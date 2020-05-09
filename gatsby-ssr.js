/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react");
const safePrefix = require("./src/utils/safePrefix").default;

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {

    setHeadComponents([
        
    ]);

    setPostBodyComponents([
        <React.Fragment>
            <script src={safePrefix('assets/js/jquery.min.js')}/>
            <script src={safePrefix('assets/js/browser.min.js')}/>
            <script src={safePrefix('assets/js/breakpoints.min.js')}/>
            <script src={safePrefix('assets/js/util.js')}/>
            <script src={safePrefix('assets/js/main.js')}/>
            
        </React.Fragment>
    ]);

};
