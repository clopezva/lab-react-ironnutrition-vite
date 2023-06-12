import { Divider, Input } from "antd";

function Search() {
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input name="search" value={undefined} type="text" onChange={() => {}} />
    </>
  );
}

export default Search;
