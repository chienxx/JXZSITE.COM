import Image from './Image'
import Link from './Link'

const InteractiveCard = ({ title, description, imgSrc, href, label }) => (
  <div className="group w-full transform p-4 transition-transform duration-300 ease-in-out hover:scale-105 sm:w-1/2">
    <div className="relative overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg transition-shadow duration-300 dark:border-gray-700 dark:bg-gray-900">
      <div className="flex min-h-[160px] items-center space-x-4 p-4">
        {/* Left - Image */}
        {imgSrc && (
          <Link href={href || '#'}>
            <div className="block h-24 w-24 transform overflow-hidden rounded-lg transition-transform duration-300 ease-in-out group-hover:translate-y-1 group-hover:scale-110">
              <Image
                alt={title}
                src={imgSrc}
                className="h-full w-full object-cover object-center"
                width={96}
                height={96}
              />
            </div>
          </Link>
        )}

        {/* Right - Content */}
        <div className="flex w-full flex-col justify-center space-y-2">
          <Link href={href || '#'}>
            <div className="block text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-green-500 dark:text-gray-100 dark:group-hover:text-green-500">
              <span className="hover:underline">{title}</span>
            </div>
          </Link>
          <p className="text-sm text-gray-700 transition-colors duration-300 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-200">
            {description}
          </p>
        </div>
      </div>

      {/* Label with dynamic effect */}
      {label && (
        <div className="absolute top-3 right-3">
          <span className="inline-block transform rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-200 dark:bg-green-900 dark:text-green-400 dark:group-hover:bg-green-800">
            {label}
          </span>
        </div>
      )}
    </div>
  </div>
)

export default InteractiveCard
