// --- Color Constants ---
const primary = "#f59300";      
const grayDefault = "#424242";
const grayLight = "#a4a4a4";  
const grayLighter = "#cecece"; 
const grayLightest = "#f5f5f5"; 

const gfgGreen = "#277800"; 

const profilesData = [
  {
    name: "GeeksforGeeks",
    handle: "wakdeshravni1",
    url: "https://auth.geeksforgeeks.org/user/wakdeshravni1",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/geeksforgeeks.svg", 
    color: gfgGreen, 
  },
  {
    name: "LeetCode",
    handle: "shravni_code",
    url: "https://www.leetcode.com/shravni_code",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/leetcode.svg",
    color: grayDefault,
  },
  {
    name: "HackerRank",
    handle: "wakdeshravni1",
    url: "https://www.hackerrank.com/profile/wakdeshravni1",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/hackerrank.svg",
    color: grayDefault,
  },
  {
    name: "CodeChef",
    handle: "shr_ni",
    url: "https://www.codechef.com/users/shr_ni",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/codechef.svg",
    color: grayDefault,
  },
  {
    name: "Codeforces",
    handle: "shravni_code",
    url: "https://codeforces.com/profile/shravni_code",
    logoUrl: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/codeforces.svg",
    color: grayDefault,
  },
];

export default function CodingProfiles() {
  return (
    // The main container top border and padding are kept for overall section separation
    <div className="space-y-4 pt-4 border-t" style={{ borderColor: grayLighter }}>
      {/* Vertical List Container */}
      <div className="divide-y" style={{ borderColor: grayLighter }}>
        {profilesData.map((profile, index) => (
          <a
            key={profile.name}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative flex items-center justify-between px-2
              transition-all duration-300 ease-in-out
              group
            "
            style={{ 
                // Adjust vertical padding: remove top padding for the first item
                paddingTop: index === 0 ? '0.5rem' : '0.75rem', 
                paddingBottom: '0.75rem', 
                "&:hover": {
                    backgroundColor: grayLightest, 
                    paddingLeft: '1.25rem', 
                }
            }}
          >
            {/* Hover Accent Bar (Orange) */}
            <div
                className="absolute left-0 top-0 h-full w-1 rounded-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ backgroundColor: primary }}
            />

            <div className="flex items-center gap-4">
                {/* Logo */}
                <img
                  src={profile.logoUrl}
                  alt={`${profile.name} Logo`}
                  className="w-7 h-7 object-contain"
                  // Styling to ensure GfG is green, others default to gray
                  style={{ 
                    // This conditional check now works because gfgGreen is defined
                    filter: profile.color === gfgGreen ? `drop-shadow(0 0 0 ${gfgGreen})` : 'none', 
                    color: profile.color 
                  }} 
                />
                
                {/* Profile Name and Handle */}
                <div>
                  <div className="text-base font-semibold" style={{ color: grayDefault }}>
                    {profile.name}
                  </div>
                  <div className="text-sm" style={{ color: grayLight }}>
                    @{profile.handle}
                  </div>
                </div>
            </div>

            <span 
                className="text-xl transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: primary }}
            >
                &rarr;
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}