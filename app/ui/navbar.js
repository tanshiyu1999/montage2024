import Image from "next/image";

export default function Navbar() {
  return (
    <nav class="bg-blue-500 py-4 px-6 fixed top-0 left-0 right-0 z-50">
      <div class="max-w-7xl mx-auto">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <a href="#" class="text-white font-semibold text-lg mr-6">Logo</a>
            <ul class="flex space-x-4">
              <li><a href="#" class="text-white hover:text-gray-200">Home</a></li>
              <li><a href="#" class="text-white hover:text-gray-200">About</a></li>
              <li><a href="#" class="text-white hover:text-gray-200">Services</a></li>
              <li><a href="#" class="text-white hover:text-gray-200">Contact</a></li>
            </ul>
          </div>
          <div>
            <button class="bg-white text-blue-500 py-2 px-4 rounded-md font-semibold hover:bg-blue-400 hover:text-white transition duration-300">Sign In</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
