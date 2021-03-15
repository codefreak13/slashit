import * as React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = `
<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="30px" height="30px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
<path d="M26.414,25L42.707,8.707c0.391-0.391,0.391-1.023,0-1.414s-1.023-0.391-1.414,0L25,23.586L8.707,7.293
	c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L23.586,25L7.293,41.293c-0.391,0.391-0.391,1.023,0,1.414
	s1.023,0.391,1.414,0L25,26.414l16.293,16.293C41.488,42.902,41.744,43,42,43s0.512-0.098,0.707-0.293
	c0.391-0.391,0.391-1.023,0-1.414L26.414,25z"/>
</svg>
`;

export default () => <SvgXml xml={xml} height="100%" fill='#000000' />;