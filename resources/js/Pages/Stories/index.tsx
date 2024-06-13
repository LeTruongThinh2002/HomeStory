import DataTables from "@/Components/DataTables";

export const index = ({ auth, stories }: any) => {
  return (
    <DataTables
      auth={auth}
      title="Management Stories"
      packages={stories}
      object="stories"
    />
  );
};
export default index;
