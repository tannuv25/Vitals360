import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import DoctorsTableOne from "../../components/tables/BasicTables/doctors/DoctorsTableOne";


export default function DoctorsTable() {
  return (
    <>
      <PageMeta
        title="React.js Doctors Tables Dashboard |  Admin Dashboard"
        description="This is React.js Doctors Tables Dashboard page Admin Dashboard"
      />
      <PageBreadcrumb pageTitle="Doctors Tables" />
      <div className="space-y-6">
        <ComponentCard title="Doctors Table ">
          <DoctorsTableOne />
        </ComponentCard>
      </div>
    </>
  );
}
