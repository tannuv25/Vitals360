import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import BasicTableOne from "../../components/tables/BasicTables/BasicTableOne";

export default function PatientTables() {
  return (
    <>
      <PageMeta
        title="React.js Patient Tables Dashboard | Admin Dashboard"
        description="This is React.js Patient Tables Dashboard page - Admin Dashboard"
      />
      <PageBreadcrumb pageTitle="Patient Tables" />
      <div className="space-y-6">
        <ComponentCard title="Patient Table 1">
          <BasicTableOne />
        </ComponentCard>
      </div>
    </>
  );
}
