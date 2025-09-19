import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import AppointmentTable from "../../components/tables/BasicTables/AppointmentTable";

export default function AppointmentTables() {
  return (
    <>
      <PageMeta
        title="React.js Appointment Tables Dashboard | Admin Dashboard"
        description="This is React.js Appointment Tables Dashboard page - Admin Dashboard"
      />
      <PageBreadcrumb pageTitle="Appointment Tables" />
      <div className="space-y-6">
        <ComponentCard title="Appointment Table 1">
          <AppointmentTable/>
        </ComponentCard>
      </div>
    </>
  );
}
