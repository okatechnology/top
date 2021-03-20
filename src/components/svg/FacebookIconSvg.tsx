export const FacebookIconSvg: React.VFC<SvgsProps> = ({ className }) => (
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
    <title>Facebook icon</title>
    <desc>Facebook icon</desc>
    <path
      className="fill-white group-hover:fill-facebookIcon group-focus:fill-facebookIcon transition-fill duration-200"
      d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M15,8h-1.4C13.1,8,13,8.2,13,8.8V10h2l-0.2,2
	H13v7h-3v-7H8v-2h2V7.7C10,5.9,10.9,5,13,5h2V8z"
    />
  </svg>
);
