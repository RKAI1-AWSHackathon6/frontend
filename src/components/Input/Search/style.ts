import { Input } from "antd";
import styled from "styled-components";

const SearchInputWrapper = styled(Input)`
    width: 100%;
    height: 40px;
    padding: 8px 16px;
    border: 1px solid #E7E7E7;
    border-radius: 8px;
    .ant-input-prefix{
        margin-right:16px;
    }
`;

export { SearchInputWrapper }