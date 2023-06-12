import { Divider, Input } from "antd";

function Search({ value, onSearchChange }) {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        name="search"
        value={value}
        type="text"
        onChange={onSearchChange}
      />
    </>
  );
}

export default Search;
