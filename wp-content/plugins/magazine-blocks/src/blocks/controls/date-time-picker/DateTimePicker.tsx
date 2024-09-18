import React from "react";
import {
	DateTimePicker as WPDateTimePicker,
	DatePicker,
} from "@wordpress/components";
import PopoverDrawer from "../popover-drawer/PopoverDrawer";
import { Button, Input, chakra } from "@chakra-ui/react";
import { format } from "@wordpress/date";

type Props = {
	label: string;
	value?: string;
	onChange(v: string | null): void;
	hasTimePicker?: boolean;
};
const DateTimePicker = ({ label, value, onChange, hasTimePicker }: Props) => {
	const Comp = hasTimePicker ? WPDateTimePicker : DatePicker;

	return (
		<PopoverDrawer
			label={label}
			closeOnFocusOutside
			trigger={(triggerProps) => (
				<Button
					onClick={() => triggerProps.onToggle()}
					w="fit-content"
					colorScheme="gray"
					variant="outline"
					style={{ paddingLeft: "10px", paddingRight: "10px" }}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						height="18"
						width="18"
					>
						<path
							fillOpacity="0.5"
							fillRule="evenodd"
							d="M8 1a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1Zm8 0a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Z"
							clipRule="evenodd"
						/>
						<path
							fillOpacity="0.5"
							fillRule="evenodd"
							d="M5 5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5ZM2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6Z"
							clipRule="evenodd"
						/>
						<path
							fillOpacity="0.5"
							fillRule="evenodd"
							d="M2 10a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"
							clipRule="evenodd"
						/>
					</svg>
					<span style={{ paddingLeft: "10px" }}>
						{value ? format("Y-m-d", value) : "yyyy-mm-dd"}
					</span>
				</Button>
			)}
			popoverFromControlProps={{
				flexDir: "column",
				justifyContent: "flex-start",
				sx: {
					".chakra-form__label": {
						display: "block",
						m: 0,
						mb: 1,
						w: "full",
					},
					".chakra-button": {
						w: "full",
						justifyContent: "flex-start",
					},
				},
			}}
			popoverDivProps={{
				pt: "10px",
			}}
		>
			<Comp
				currentDate={value}
				onChange={(v) => {
					if (v) {
						onChange(format("Y-m-d", v));
					}
				}}
			/>
		</PopoverDrawer>
	);
};

export default DateTimePicker;
