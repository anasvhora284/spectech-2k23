import "../App.css";

const SponsorIs = ({ imgSrc }) => {
  return (
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5 sponsorImgBg">
      <a href="#">
        <img class="p-0 rounded-t-" src={imgSrc} alt="sponsorImg" />
      </a>
    </div>
  );
};

export default SponsorIs;
