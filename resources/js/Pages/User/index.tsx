import DataTables from "@/Components/DataTables";

export const index = ({ auth, user }: any) => {
  return (
    <DataTables
      auth={auth}
      title="Management User"
      packages={user}
      object="user"
    />
  );
};
export default index;
