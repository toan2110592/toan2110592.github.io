export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Toan Nguyen",
	description: "This site is created by toan nguyen!",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/toannguyen3107",
		twitter: "https://twitter.com/minhton3107",
		docs: "https://nextui.org",
		facebook: "https://www.facebook.com/nguyenminhtoan07/",
    sponsor: "https://www.facebook.com/nguyenminhtoan07/",
	}
};
