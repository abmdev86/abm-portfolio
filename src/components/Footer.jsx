import { footerLinks } from '../lib';

const LinkElement = ({ label, href }) => {
  return (
    <>
      <div className=" outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-[0_0_auto] h-auto relative whitespace-pre w-auto">
        <a href={href} target="blank">
          <p className=" font-sans text-sm text-left text-[rgb(102,102,102)] m-0 p-0">
            {label}
          </p>
        </a>
      </div>
    </>
  );
};
export default function Footer() {
  return (
    <>
      <div className=" md:flex gap-[10px] justify-start order-2 p-[30px] content-center md:justify-between items-center bg-white hidden md:flex-[0_0_auto] flex-col h-min w-full overflow-visible md:p-[30px_50px] relative md:w-screen ">
        <div className=" justify-start items-start flex flex-[0_0_auto] gap-[15px] h-min overflow-hidden p-0  relative w-min">
          {footerLinks.map((link, index) => (
            <LinkElement key={index} label={link.label} href={link.href} />
          ))}
        </div>
      </div>
    </>
  );
}
