import { SocialIcon } from "react-social-icons";
import "../css/Teams.css";

const TeamMember = ({ img, name, post, LinkedIn }) => {
  const alts = { name } + "Image";
  return (
    <div className="TeamMemberDiv m-5">
      <div class="w-full max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div class="flex flex-col m-5 items-center">
          <img
            class="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={img}
            alt={alts}
          />
          <h5 class="mb-1 text-xl font-medium text-gray-700 dark:text-white">
            {name}
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">{post}</span>
          <div class="flex mt-4 space-x-3 md:mt-6">
            <a
              href={LinkedIn}
              class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 rounded-lg focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
            >
              <SocialIcon url="www.linkedin.com" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
