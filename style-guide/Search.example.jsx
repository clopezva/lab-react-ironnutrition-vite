// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from "antd";
import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        name="search"
        value={undefined}
        type="text"
        onChange={(e) => setChange(e.target.value)}
      />
    </>
  );
}

export default Search;
