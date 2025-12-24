 const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">

        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8 border-b-2 border-blue-500 pb-4">
          Our Expert Services
        </h2>

        <ul className="space-y-4">
          <li className="flex items-center p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500 hover:bg-blue-100 transition duration-300">
            <span className="text-blue-600 font-bold mr-3">✓</span>
            <span className="text-lg font-medium text-gray-700">Web Development</span>
          </li>

          <li className="flex items-center p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500 hover:bg-purple-100 transition duration-300">
            <span className="text-purple-600 font-bold mr-3">✓</span>
            <span className="text-lg font-medium text-gray-700">UI/UX Design</span>
          </li>

          <li className="flex items-center p-4 bg-green-50 rounded-lg border-l-4 border-green-500 hover:bg-green-100 transition duration-300">
            <span className="text-green-600 font-bold mr-3">✓</span>
            <span className="text-lg font-medium text-gray-700">App Development</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Services;