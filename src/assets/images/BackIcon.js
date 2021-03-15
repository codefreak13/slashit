import * as React from 'react';
import { SvgXml } from 'react-native-svg';
 
const xml = `
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 32 32">
<g id="icomoon-ignore">
</g>
<path d="M12.792 15.233l-0.754 0.754 6.035 6.035 0.754-0.754-5.281-5.281 5.256-5.256-0.754-0.754-3.013 3.013z" fill="#000000"></path>
</svg>
`;
 
export default () => <SvgXml xml={xml} height="100%" fill='#dadada50' />;