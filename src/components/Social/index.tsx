import { ISocialItemProps } from "../interface/Social"
import { SocialItemWrapper } from "./style"
import { EditFilled } from "@ant-design/icons";
import { Dropdown, Input, Space } from "antd";
import type { MenuProps } from 'antd';
import { useState } from "react";
import {actUpdateSocialMediaValue} from "@/redux/action";
import { connect } from "react-redux";

const SocialItem = (props: ISocialItemProps) => {
    const {socialMedia} = props;
    const [value, setValue] = useState(socialMedia.value);
    const items: MenuProps["items"] = [
        {
          label: <Input 
            autoFocus
            placeholder="Enter your contact"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.stopPropagation()}
            onPressEnter={(e) => props.actUpdateSocialMediaValue({
                ...socialMedia,
                value: (e.target as HTMLInputElement).value
            })}
            onBlur={(e) => props.actUpdateSocialMediaValue({
                ...socialMedia,
                value: (e.target as HTMLInputElement).value
            })}
            onClick={(e) => e.stopPropagation()} 
          />,
          key: '0',
        }
    ];

    return <SocialItemWrapper>
        <img src={socialMedia.icon} alt={socialMedia.name}/>
        <span className="text">{socialMedia.value ? socialMedia.value : "Not specified"}</span>
        <Dropdown menu={{items}} trigger={["click"]}>
            <Space>
                <EditFilled />
            </Space>
        </Dropdown>
        
    </SocialItemWrapper>
}

export default connect(() => ({}), {
    actUpdateSocialMediaValue 
})(SocialItem);