import DataTables from "@/Components/DataTables";

export const index = ({ auth, type }: any) => {
  return (
    <DataTables
      auth={auth}
      title="Management Type"
      packages={type}
      object="type"
    />
  );
};
export default index;
