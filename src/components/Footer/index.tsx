import { useRouter } from "next/router";
import { useTheme } from "providers/ThemeProvider";
import React from "react";
import { BsFillMoonStarsFill, BsFillSunFill, BsGithub } from "react-icons/bs";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
	const { theme, setTheme } = useTheme();
	const router = useRouter();

	return (
		<div
			style={{
				display: "flex",
				textAlign: "center",
				justifyContent: "center",
				margin: 100,
			}}
		>
			<BsGithub
				size={20}
				style={{ padding: 10, cursor: "pointer" }}
				title={"View on GitHub"}
				onClick={() =>
					router.push("https://github.com/vitorcremonez/mozio-tech-assessment")
				}
			/>
			{theme === "dark" && (
				<BsFillSunFill
					size={20}
					style={{ padding: 10, cursor: "pointer" }}
					onClick={() => setTheme("light")}
					title={"Switch to Light Mode"}
				/>
			)}
			{theme === "light" && (
				<BsFillMoonStarsFill
					size={20}
					style={{ padding: 10, cursor: "pointer" }}
					onClick={() => setTheme("dark")}
					title={"Switch to Dark Mode"}
				/>
			)}
		</div>
	);
};

export default Footer;
