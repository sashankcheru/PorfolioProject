import defaultImage from "../resources/images/me.jpg"
import { CodeRounded, ContactPageRounded, FacebookRounded,EmailRounded, HomeRounded, SchoolRounded,Instagram,LinkedIn } from "@mui/icons-material";


export const userProfileDefaultData={
    "Name"      :"Sashank",
    "UserName"  :"Sashank",
    "DOB"       :"12-09-2003",
    "Address"   :"Puttaparthi",
    "EmailID"   :"csk@gmail.com",
    "PhoneNo"   :"9849335517",
    "Description":"I'm a Student",
    "Photo"     : defaultImage
}

export const IconTitleMap={
    "Home": <HomeRounded className="icon"/>,
    "Academics": <SchoolRounded className="icon"/>,
    "Projects": <CodeRounded className="icon"/>,
    "Social Profiles": <FacebookRounded className="icon"/>,
    "Resume": <ContactPageRounded className="icon"/>,
    "Instagram": <Instagram className="icon"/>,
    "LinkedIn": <LinkedIn className="icon"/>,
    "Facebook": <FacebookRounded className="icon"/>,
    "Mail": <EmailRounded className="icon"/>,
    // "Facebook": <FacebookIcon className="icon"/>,
}

export const DEFAULT_SIDE_MENU=[
    {
        "title": "Home",
        "icon":  IconTitleMap.Home,
        "link": "/home"
    },
    {
        "title": "Academics",
        "icon": IconTitleMap.Academics,
        "link": "/academics"
    },
    {
        "title": "Projects",
        "icon": IconTitleMap.Projects,
        "link": "/projects"
    },
    {
        "title": "Social Profiles",
        "icon": IconTitleMap["Social Profiles"],
        "link": "/social-profile"
    },
    {
        "title": "Resume",
        "icon": IconTitleMap.Resume,
        "link": "/resume"
    }
]

export const Social = [
    {
      "name": "Facebook",
      "icon": IconTitleMap["Social Profiles"],
      "link": "https://www.facebook.com/your-profile",
      
    },
    {
      "name": "Mail",
      "link": "https://mailto:sashankcherukuri7@gmail.com",
      "icon": IconTitleMap.Mail,
    },
    {
      "name": "Instagram",
      "link": "https://www.instagram.com/your-profile",
      "icon": IconTitleMap.Instagram,
    },
    {
      "name": "LinkedIn",
      "link": "https://www.linkedin.com/in/cherukuri-sashank-8a8463285",
      "icon": IconTitleMap.LinkedIn,
    },
  ];


export const DEFAULT_DRAWER_FLAG= true;
export const DEFAULT_ACTIVE_PAGE= DEFAULT_SIDE_MENU[0].title

export const drawerWidth = 300;


export const DarkTheme              = "dark"
export const LightTheme             = "light"
