export const EmainIconSvg: React.VFC<SvgsProps> = ({ className }) => (
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
    <title>email icon</title>
    <desc>email icon</desc>
    <path
      className="fill-white group-hover:fill-emailIcon group-focus:fill-emailIcon transition-fill duration-200"
      d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M19,7l-7,5.7L5,7H19z M19,17H5V8.5l7,5.7l7-5.7
	V17z"
    />
  </svg>
);
