export const GithubIconSvg: React.VFC<SvgsProps> = ({ className }) => (
  <svg
    className={`${
      className ? className : ''
    } rounded-full group-hover:bg-white group-focus:bg-white bg-contain transition-background-color duration-200`}
    id="レイヤー_1"
    data-name="レイヤー 1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 24 24"
  >
    <path
      className="fill-white group-hover:fill-githubIcon group-focus:fill-githubIcon transition-fill duration-200"
      d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm2.2,18.6c-.4.1-.5-.1-.5-.3V16.4a1.45,1.45,0,0,0-.5-1.3c1.6-.2,3.2-.8,3.2-3.5a2.94,2.94,0,0,0-.7-1.9,2.46,2.46,0,0,0-.1-1.9s-.6-.2-1.9.7a5.54,5.54,0,0,0-1.8-.2,11,11,0,0,0-1.8.2c-1.2-.8-1.8-.6-1.8-.6a3.11,3.11,0,0,0-.1,1.9,2.94,2.94,0,0,0-.7,1.9c0,2.7,1.6,3.3,3.2,3.5a1.27,1.27,0,0,0-.4.9,1.41,1.41,0,0,1-2-.6,1.42,1.42,0,0,0-1.1-.7s-.7,0,0,.4a1.67,1.67,0,0,1,.8,1s.4,1.2,2.4.8v1.3c0,.2-.1.4-.5.3A6.87,6.87,0,0,1,5,12a7,7,0,0,1,14,0A6.91,6.91,0,0,1,14.2,18.6Z"
    />
  </svg>
);
