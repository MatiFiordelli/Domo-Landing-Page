import { ReactNode } from "react";

export interface LayoutProps {
	children: ReactNode;
}

export interface DataButtonObj {
	type: string;
	text: string;
	link?: string;
}

export interface ButtonInfoProps {
	dataButton: DataButtonObj;
}

export interface VerticalCardProps {
	icon: string;
	title: string;
	description: string;
	buttonType: DataButtonObj;
}

export interface dataVerticalCardProps {
	dataCard: VerticalCardProps;
	isSwiper: boolean;
}

export interface HorizontalCardProps {
	title: string;
	description: string;
	buttonType: {
		type: string;
		text: string;
	};
	showImage: boolean;
	link: string;
}

export interface dataHorizontalCardProps {
	dataCard: HorizontalCardProps;
	isScreenXXL: boolean;
}

export interface IconProps {
	name: string;
	title: string;
	isSwiper: boolean;
}
