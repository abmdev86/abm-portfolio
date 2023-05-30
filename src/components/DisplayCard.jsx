import { EyeIcon } from '@heroicons/react/24/solid';

const DisplayCard = ({ title = '', description = '', img = '', url = '' }) => {
  return (
    <div className="block w-full">
      <div className="relative">
        <div className="bg-gray-200 rounded-lg shadow overflow-hidden aspect-w-16 aspect-h-9">
          {img ? (
            <img
              src={img}
              alt="project preview"
              className="hover:opacity-80 transition h-50 w-50 object-contain"
            />
          ) : null}
        </div>
        <a href={url} className="absolute top-2 right-2 ">
          <EyeIcon className="w-7 h-7 drop-shadow-lg text-rose-500" />
        </a>
      </div>
      <div className="mt-2 w-full text-gray-700 font-semibold leading-tight text-center p-4">
        {title ?? ''}
      </div>
      <div className="mt-1 inline-flex items-center space-x-1 text-gray-500">
        <p className="text-gray-700 leading-relaxed font-light text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

export default DisplayCard;
