import DataTables from "@/Components/DataTables";
import SearchNull from "@/Components/SearchNull";

export const index = ({ auth, stories, types, searchQuery = {} }: any) => {
  stories["types"] = types["data"];
  stories["query"] = searchQuery;
  console.log(searchQuery);
  return stories["data"].length !== 0 ? (
    <DataTables
      auth={auth}
      title="Management Stories"
      packages={stories}
      object="stories"
      //searchQuery={query}
    />
  ) : (
    <SearchNull
      auth={auth}
      title="Management Stories"
      packages={stories}
      object="stories"
    />
  );
};
export default index;
