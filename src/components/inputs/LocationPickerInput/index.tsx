import { Api } from "libs";
import React, { useCallback, useEffect, useState } from "react";
import { Container, Error as ErrorMessage, Label } from "../styles";
import { InputProps } from "../types";
import Selector from "./Selector";
import { Input } from "./styles";

const LocationPickerInput: React.FC<InputProps<string>> = ({
	value,
	label,
	error,
	onChange = () => {},
}) => {
	const [term, setTerm] = useState(value);
	const [focused, setFocused] = useState(false);
	const [options, setOptions] = useState([]);
	const [fetching, setFetching] = useState(false);
	const [fetchError, setFetchError] = useState<string | undefined>(undefined);
	const errorMessage = fetchError || error;

	const fetch = useCallback(async (query: string) => {
		try {
			setFetching(true);
			setFetchError(undefined);
			const locations = await Api.getLocations(query);
			if (locations.length <= 0) {
				throw Error();
			} else {
				setOptions(locations);
			}
		} catch (error: any) {
			const API_ERROR_MESSAGE = error.response?.data.message;
			const DEFAULT_ERROR_MESSAGE = "Oops! Failed to search with this keyword.";
			setFetchError(API_ERROR_MESSAGE || DEFAULT_ERROR_MESSAGE);
			setOptions([]);
		} finally {
			setFetching(false);
		}
	}, []);

	useEffect(() => {
		if (term) {
			fetch(term);
		}
	}, [fetch, term]);

	return (
		<Container>
			<Label>{label}</Label>
			<Input
				value={value === term ? value : term}
				onFocus={() => setFocused(true)}
				onBlur={() => setFocused(false)}
				onChange={({ target }) => {
					const newValue = target.value;
					if (newValue.length < value.length) {
						onChange("");
					}
					setTerm(newValue);
				}}
			/>
			{focused && !fetchError && term && (
				<Selector
					loading={fetching}
					options={options}
					onSelect={(option) => {
						setTerm(option);
						onChange(option);
					}}
				/>
			)}
			{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
		</Container>
	);
};

export default LocationPickerInput;
