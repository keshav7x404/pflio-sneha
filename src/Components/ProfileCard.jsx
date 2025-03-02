import aboutimg from "../assets/sneha_sahu.png"

const ProfileCard = () => {
    return (
      <div className="relative flex justify-center items-center">
        {/* Oval Gradient Border */}
        <div className="absolute w-[330px] h-[400px] rounded-[45%] border-[6px] border-transparent bg-gradient-to-r from-blue-500 via-pink-500 to-cyan-500 animate-spin-slow"></div>
  
        {/* Profile Image - Adjusted for Oval Shape */}
        <img
          className="w-[280px] h-[340px] rounded-[45%] object-cover shadow-lg border-[3px] border-gray-900 relative z-10"
          src={aboutimg}
          alt="Profile"
        />
  
        {/* Rotating Text Container */}
        <div className="absolute w-[330px] h-[400px] animate-spin-slow">
          <svg className="w-full h-full" viewBox="0 0 330 400">
            <defs>
              <path
                id="ovalPath"
                d="M165,20 C250,-10 340,150 165,390 C-10,150 80,-10 165,20"
                fill="transparent"
              />
            </defs>
            <text className="text-[11px] font-bold uppercase tracking-wide fill-gray-200">
              <textPath href="#ovalPath" startOffset="50%">
                I’m a Developer & Designer | I’m a Blogger & Coder |
              </textPath>
            </text>
          </svg>
        </div>
      </div>
    );
  };
  
  export default ProfileCard;
  