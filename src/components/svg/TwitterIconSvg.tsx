export const TwitterIconSvg: React.VFC<SvgsProps> = ({ className }) => (
  <svg
    className={`${
      className ? className : ''
    } rounded-full group-hover:bg-white group-focus:bg-white transition-background-color duration-200`}
    version="1.1"
    id="レイヤー_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
  >
    <title>Twitter icon</title>
    <desc>Twitter icon</desc>
    <path
      className="fill-white group-hover:fill-twitterIcon group-focus:fill-twitterIcon transition-fill duration-200"
      d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M18.1,9.6c0.2,4-2.8,8.5-8.2,8.5
	c-1.6,0-3.1-0.5-4.4-1.3c1.5,0.2,3-0.2,4.3-1.2c-1.3,0-2.3-0.9-2.7-2c0.5,0.1,0.9,0.1,1.3,0C7,13.4,6,12.1,6.1,10.8
	c0.4,0.2,0.8,0.3,1.3,0.4c-1.3-0.9-1.6-2.5-0.9-3.8c1.4,1.7,3.5,2.9,5.9,3c-0.4-1.8,0.9-3.5,2.8-3.5c0.8,0,1.6,0.3,2.1,0.9
	c0.7-0.1,1.3-0.4,1.8-0.7c-0.2,0.7-0.7,1.2-1.3,1.6c0.6-0.1,1.1-0.2,1.6-0.5C19.1,8.7,18.6,9.2,18.1,9.6z"
    />
  </svg>
);
