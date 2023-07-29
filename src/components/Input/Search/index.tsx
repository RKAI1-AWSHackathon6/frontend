import { ISearchInputProps } from "../../interface/SearchInput";
import { SearchInputWrapper } from "./style";


const SearchInput = (props: ISearchInputProps) => 
{
	const {
		placeholder,
		icon,
		disabled,
		className,
		width,
		onChange
	} = props;
  
	return (
		<SearchInputWrapper
			type="search"
			disabled={disabled}
			prefix={icon}
			placeholder={placeholder}
			className={className}
			width={width}
			onChange={onChange}
		/>
	);
};

export default SearchInput;
