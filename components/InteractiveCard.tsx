import Image from './Image'
import Link from './Link'

const InteractiveCard = ({ title, description, imgSrc, href }) => (
  <div className="md max-w-[544px] p-4 md:w-1/2">
    <div
      className={`${
        imgSrc && 'h-full'
      } overflow-hidden rounded-lg border border-gray-300 dark:border-gray-600 transition-transform duration-500 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900`}
    >
      {imgSrc && (
        <div className="relative">
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center w-full h-48 rounded-t-lg"
            width={544}
            height={306}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-center px-4">{description}</p>
          </div>
        </div>
      )}
      <div className="p-6">
        <h2 className="mb-2 text-xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-500"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default InteractiveCard