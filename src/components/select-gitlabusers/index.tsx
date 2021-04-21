import React, { useEffect, useState } from "react";
import Select, { components } from "react-select";

import { IGitlabService } from "./service/gitlab-service.interface";

export type GitlabUsersSelectProps = {
  gitLabUrl: string;
  privateToken: string;
  service: IGitlabService;
  onChange?: (_value: any, _event: any) => void;
};

const GitlabUsersSelect: React.FC<GitlabUsersSelectProps> = (
  props: GitlabUsersSelectProps
) => {
  const { gitLabUrl, privateToken, service, onChange } = props;
  const { Option } = components;

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    service
      .fetchUsers(gitLabUrl, privateToken)
      .then((data) => {
        const userOptions = data.map((elt: any) => ({
          value: elt.id,
          label: elt.name,
          avatar_url: elt.avatar_url,
        }));
        setOptions(userOptions);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [gitLabUrl, privateToken, service]);

  const avatarRender = (avataUrl: string) => (
    <img
      src={avataUrl}
      height="30"
      width="30"
      alt={avataUrl}
      style={{ borderRadius: "50%", marginRight: 10 }}
    />
  );

  const customSingleValue = (props: any) => (
    <div style={{ display: "flex", alignItems: "center" }}>
      {avatarRender(props.data.avatar_url)}
      {props.data.label}
    </div>
  );

  const customSingleOption = (props: any) => (
    <Option {...props}>
      {avatarRender(props.data.avatar_url)}
      {props.data.label}
    </Option>
  );

  const customStyles = {
    option: (provided: any) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
  };

  return (
    <div>
      {isLoading && <span>Fetching gitlab API in progress</span>}
      {!isLoading && !isError && (
        <Select
          defaultValue={options[0]}
          options={options}
          styles={customStyles}
          components={{
            Option: customSingleOption,
            SingleValue: customSingleValue,
          }}
          onChange={onChange}
        />
      )}
      {!isLoading && isError && <span>Error while fetching Gitlab API...</span>}
    </div>
  );
};

export default GitlabUsersSelect;
