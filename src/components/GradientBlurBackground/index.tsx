import React from "react";
import { useTheme } from "styled-components";

const GradientBlurBackground: React.FC = () => {
	const theme = useTheme();
	return (
		<div
			style={{
				width: "100%",
				height: "100vh",
				position: "absolute",
				overflow: "hidden",
				top: 0,
				bottom: 0,
				zIndex: -1,
			}}
		>
			<svg
				width="1751"
				height="1080"
				viewBox="0 0 1751 1080"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style={{
					position: "absolute",

					opacity: theme.backgroundOpacity,
					left: "50%",
					top: 0,
					bottom: 0,
					transform: "translateX(-50%)",
				}}
			>
				<g filter="url(#filter0_f_146_140)">
					<path
						d="M326.547 320.288C397.232 283.817 703.846 336.103 1009.04 308.396C1125.22 297.849 1237.55 284.599 1347.05 320.288C1553.3 387.509 1405.8 588.625 1304 759.974C1108.99 1088.22 351.682 644.768 351.682 644.768C351.682 451.476 255.861 356.758 326.547 320.288Z"
						fill="url(#paint0_angular_146_140)"
					/>
				</g>
				<defs>
					<filter
						id="filter0_f_146_140"
						x="0.542969"
						y="-3"
						width="1750.39"
						height="1184"
						filterUnits="userSpaceOnUse"
						color-interpolation-filters="sRGB"
					>
						<feFlood flood-opacity="0" result="BackgroundImageFix" />
						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="BackgroundImageFix"
							result="shape"
						/>
						<feGaussianBlur
							stdDeviation="150"
							result="effect1_foregroundBlur_146_140"
						/>
					</filter>
					<radialGradient
						id="paint0_angular_146_140"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(600.252 534.356) rotate(66.8355) scale(368.149 688.957)"
					>
						<stop offset="0.0242743" stop-color="#ABE1C9" />
						<stop offset="0.446559" stop-color="#80CDD7" />
						<stop offset="0.625961" stop-color="#7C9CE5" />
						<stop offset="0.830113" stop-color="#7EA3E6" stop-opacity="0.22" />
						<stop
							offset="0.947316"
							stop-color="#CFEEBB"
							stop-opacity="0.881587"
						/>
					</radialGradient>
				</defs>
			</svg>
		</div>
	);
};

export default GradientBlurBackground;
