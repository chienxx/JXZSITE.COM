import Image from './Image'
import Link from './Link'

const InteractiveCard = ({ title, description, imgSrc, href, label }) => (
  <div className="group w-full transform p-6 transition-transform duration-300 ease-in-out hover:scale-105 sm:w-1/2">
    <div className="relative overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg transition-shadow duration-300 dark:border-gray-600 dark:bg-gray-800">
      <div className="flex items-center space-x-6 p-6">
        {/* Left - Image */}
        {imgSrc && (
          <Link href={href || '#'}>
            <div className="block h-20 w-20 overflow-hidden rounded-lg transition-transform duration-300 ease-in-out">
              <Image
                alt={title}
                src={imgSrc}
                className="h-full w-full object-cover object-center"
                width={80}
                height={80}
              />
            </div>
          </Link>
        )}

        {/* Right - Content */}
        <div className="flex w-full flex-col justify-center space-y-4">
          <Link href={href || '#'}>
            <div className="block text-lg font-semibold text-gray-900 transition-colors duration-300 dark:text-gray-100">
              {title}
            </div>
          </Link>
          <p className="text-sm text-gray-700 transition-colors duration-300 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>

      {/* Label with dynamic effect */}
      {label && (
        <div className="absolute right-4 top-4">
          <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-200 dark:bg-green-900 dark:text-green-400 dark:group-hover:bg-green-800">
            {label}
          </span>
        </div>
      )}
    </div>
  </div>
)

export default InteractiveCard
