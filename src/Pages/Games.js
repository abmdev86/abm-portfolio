import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import GameListView from '../components/GameListView';

export default function Games() {
  return (
    <div className="  min-h-full w-full max-w-screen content-center justify-start items-center bg-white flex flex-col gap-0 h-min overflow-hidden p-0  relative">
      <div className=" p-[30px] md:p-[50px] content-center justify-between items-center flex flex-[0_0_auto] h-min max-w-full overflow-hidden lg:p-[100px_50px_50px] relative w-[800px] ">
        {/* page label */}
        <div className=" outline-none flex flex-col justify-start flex-shrink-0 transform-none flex-[0_0_auto] h-auto overflow-visible relative whitespace-pre w-auto">
          <h1 className=" font-sans font-bold text-[rgb(17,17,17)] text-[32px] text-left">
            Games and Protoypes
          </h1>
        </div>
        <FontAwesomeIcon icon={faGamepad} className="text-black w-10 h-10" />
      </div>
      <GameListView />
    </div>
  );
}
