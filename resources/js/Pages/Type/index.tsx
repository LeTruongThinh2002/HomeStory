import DataTables from "@/Components/DataTables";

export const index = ({ auth, type }: any) => {
  return (
    <DataTables
      auth={auth}
      title="Management Type"
      packages={type["data"]}
      object="type"
    />
  );
};
export default index;
