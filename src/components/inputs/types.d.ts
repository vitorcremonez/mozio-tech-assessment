export interface InputProps<T> {
	value: T;
	label: string;
	error?: string;
	onChange?: (option: T) => any;
}
