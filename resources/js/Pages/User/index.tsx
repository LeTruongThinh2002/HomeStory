import DataTables from "@/Components/DataTables";
import SearchNull from "@/Components/SearchNull";

export const index = ({ auth, user }: any) => {
  return user["data"].length !== 0 ? (
    <DataTables
      auth={auth}
      title="Management user"
      packages={user}
      object="user"
    />
  ) : (
    <SearchNull
      auth={auth}
      title="Management user"
      packages={user}
      object="user"
    />
  );
};
export default index;
