// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHeader,
//   TableRow,
// } from "../../ui/table";

// import Badge from "../../ui/badge/Badge";

// interface Order {
//   id: number;
//   user: {
//     image: string;
//     name: string;
//     role: string;
//   };
//   projectName: string;
//   team: {
//     images: string[];
//   };
//   status: string;
//   budget: string;
// }

// // Define the table data using the interface
// const tableData: Order[] = [
//   {
//     id: 1,
//     user: {
//       image: "/images/user/user-17.jpg",
//       name: "Lindsey Curtis",
//       role: "Web Designer",
//     },
//     projectName: "Agency Website",
//     team: {
//       images: [
//         "/images/user/user-22.jpg",
//         "/images/user/user-23.jpg",
//         "/images/user/user-24.jpg",
//       ],
//     },
//     budget: "3.9K",
//     status: "Active",
//   },
//   {
//     id: 2,
//     user: {
//       image: "/images/user/user-18.jpg",
//       name: "Kaiya George",
//       role: "Project Manager",
//     },
//     projectName: "Technology",
//     team: {
//       images: ["/images/user/user-25.jpg", "/images/user/user-26.jpg"],
//     },
//     budget: "24.9K",
//     status: "Pending",
//   },
//   {
//     id: 3,
//     user: {
//       image: "/images/user/user-17.jpg",
//       name: "Zain Geidt",
//       role: "Content Writing",
//     },
//     projectName: "Blog Writing",
//     team: {
//       images: ["/images/user/user-27.jpg"],
//     },
//     budget: "12.7K",
//     status: "Active",
//   },
//   {
//     id: 4,
//     user: {
//       image: "/images/user/user-20.jpg",
//       name: "Abram Schleifer",
//       role: "Digital Marketer",
//     },
//     projectName: "Social Media",
//     team: {
//       images: [
//         "/images/user/user-28.jpg",
//         "/images/user/user-29.jpg",
//         "/images/user/user-30.jpg",
//       ],
//     },
//     budget: "2.8K",
//     status: "Cancel",
//   },
//   {
//     id: 5,
//     user: {
//       image: "/images/user/user-21.jpg",
//       name: "Carla George",
//       role: "Front-end Developer",
//     },
//     projectName: "Website",
//     team: {
//       images: [
//         "/images/user/user-31.jpg",
//         "/images/user/user-32.jpg",
//         "/images/user/user-33.jpg",
//       ],
//     },
//     budget: "4.5K",
//     status: "Active",
//   },
// ];

// export default function BasicTableOne() {
//   return (
//     <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
//       <div className="max-w-full overflow-x-auto">
//         <Table>
//           {/* Table Header */}
//           <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
//             <TableRow>
//               <TableCell
//                 isHeader
//                 className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 User
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 Project Name
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 Team
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 Status
//               </TableCell>
//               <TableCell
//                 isHeader
//                 className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
//               >
//                 Budget
//               </TableCell>
//             </TableRow>
//           </TableHeader>

//           {/* Table Body */}
//           <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
//             {tableData.map((order) => (
//               <TableRow key={order.id}>
//                 <TableCell className="px-5 py-4 sm:px-6 text-start">
//                   <div className="flex items-center gap-3">
//                     <div className="w-10 h-10 overflow-hidden rounded-full">
//                       <img
//                         width={40}
//                         height={40}
//                         src={order.user.image}
//                         alt={order.user.name}
//                       />
//                     </div>
//                     <div>
//                       <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
//                         {order.user.name}
//                       </span>
//                       <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
//                         {order.user.role}
//                       </span>
//                     </div>
//                   </div>
//                 </TableCell>
//                 <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                   {order.projectName}
//                 </TableCell>
//                 <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                   <div className="flex -space-x-2">
//                     {order.team.images.map((teamImage, index) => (
//                       <div
//                         key={index}
//                         className="w-6 h-6 overflow-hidden border-2 border-white rounded-full dark:border-gray-900"
//                       >
//                         <img
//                           width={24}
//                           height={24}
//                           src={teamImage}
//                           alt={`Team member ${index + 1}`}
//                           className="w-full size-6"
//                         />
//                       </div>
//                     ))}
//                   </div>
//                 </TableCell>
//                 <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
//                   <Badge
//                     size="sm"
//                     color={
//                       order.status === "Active"
//                         ? "success"
//                         : order.status === "Pending"
//                         ? "warning"
//                         : "error"
//                     }
//                   >
//                     {order.status}
//                   </Badge>
//                 </TableCell>
//                 <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
//                   {order.budget}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";


import { ChevronLeft, ChevronRight, MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react";
import Badge from "../../../ui/badge/Badge";
import Button from "../../../ui/button/Button";
import { Input } from "../../../ui/input";

interface Patient {
  id: number;
  user: {
    image: string;
    name: string;
    age: number;
  };
  condition: string;
  doctor: {
    name: string;
    specialty: string;
  };
  status: string;
  lastVisit: string;
}

// Static patient data
const staticData: Patient[] = [
  {
    id: 1,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Sarah Johnson",
      age: 34,
    },
    condition: "Hypertension",
    doctor: {
      name: "Dr. Smith",
      specialty: "Cardiology",
    },
    lastVisit: "2024-03-15",
    status: "Active",
  },
  {
    id: 2,
    user: {
      image: "/images/user/user-18.jpg",
      name: "Michael Chen",
      age: 45,
    },
    condition: "Diabetes Type 2",
    doctor: {
      name: "Dr. Williams",
      specialty: "Endocrinology",
    },
    lastVisit: "2024-03-12",
    status: "Pending",
  },
  {
    id: 3,
    user: {
      image: "/images/user/user-19.jpg",
      name: "Emily Davis",
      age: 28,
    },
    condition: "Migraine",
    doctor: {
      name: "Dr. Brown",
      specialty: "Neurology",
    },
    lastVisit: "2024-03-18",
    status: "Active",
  },
  {
    id: 4,
    user: {
      image: "/images/user/user-20.jpg",
      name: "Robert Wilson",
      age: 52,
    },
    condition: "Arthritis",
    doctor: {
      name: "Dr. Jones",
      specialty: "Rheumatology",
    },
    lastVisit: "2024-03-10",
    status: "Discharged",
  },
  {
    id: 5,
    user: {
      image: "/images/user/user-21.jpg",
      name: "Lisa Anderson",
      age: 38,
    },
    condition: "Asthma",
    doctor: {
      name: "Dr. Taylor",
      specialty: "Pulmonology",
    },
    lastVisit: "2024-03-20",
    status: "Active",
  },
  {
    id: 6,
    user: {
      image: "/images/user/user-22.jpg",
      name: "David Miller",
      age: 41,
    },
    condition: "Depression",
    doctor: {
      name: "Dr. Garcia",
      specialty: "Psychiatry",
    },
    lastVisit: "2024-03-14",
    status: "Pending",
  },
  {
    id: 7,
    user: {
      image: "/images/user/user-23.jpg",
      name: "Jennifer Lopez",
      age: 33,
    },
    condition: "Pregnancy Care",
    doctor: {
      name: "Dr. Martinez",
      specialty: "Obstetrics",
    },
    lastVisit: "2024-03-17",
    status: "Active",
  },
  {
    id: 8,
    user: {
      image: "/images/user/user-24.jpg",
      name: "Thomas White",
      age: 67,
    },
    condition: "Heart Disease",
    doctor: {
      name: "Dr. Lee",
      specialty: "Cardiology",
    },
    lastVisit: "2024-03-11",
    status: "Active",
  },
];

export default function DoctorsTableOne() {
  const [data, setData] = useState<Patient[]>(staticData);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(staticData.length);
  const [showActionDropdown, setShowActionDropdown] = useState<number | null>(null);
  
  const rowsPerPage = 5;

  // API call with search and pagination
  useEffect(() => {
    const fetchPatients = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          search: searchTerm,
          page: currentPage.toString(),
          limit: rowsPerPage.toString(),
        });

        const response = await fetch(`/api/patients?${params.toString()}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const result = await response.json();
        
        // Update state with API response
        setData(result.data || staticData);
        setTotalPages(result.totalPages || Math.ceil(staticData.length / rowsPerPage));
        setTotalRecords(result.totalRecords || staticData.length);
        
      } catch (error) {
        console.error("API error:", error);
        // Fallback to static data with client-side filtering
        const filtered = staticData.filter(
          (patient) =>
            patient.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            patient.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
            patient.doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            patient.doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
            patient.status.toLowerCase().includes(searchTerm.toLowerCase())
        );
        
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        const paginatedData = filtered.slice(startIndex, endIndex);
        
        setData(paginatedData);
        setTotalPages(Math.ceil(filtered.length / rowsPerPage));
        setTotalRecords(filtered.length);
      } finally {
        setLoading(false);
      }
    };

    // Debounce search to avoid too many API calls
    const timeoutId = setTimeout(() => {
      fetchPatients();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, currentPage]);

  // Handle search with page reset
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'success';
      case 'pending':
        return 'warning';
      case 'discharged':
        return 'error';
      default:
        return 'error';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const handleAction = (action: string, patientId: number) => {
    console.log(`${action} action for patient ID: ${patientId}`);
    setShowActionDropdown(null);
    // Add your action handling logic here
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
      {/* Header */}
      <div className="border-b border-gray-300 bg-gray-50 px-6 py-4 dark:border-gray-700 dark:bg-gray-800/50">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Doctors List
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Manage and view all doctors records
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Input
              placeholder="Search patients..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-64"
              disabled={loading}
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="sticky top-0 bg-gray-50 dark:bg-gray-800/50">
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <th className="border-r border-gray-300 dark:border-gray-700 px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                Doctor
              </th>
              <th className="border-r border-gray-300 dark:border-gray-700 px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                Condition
              </th>
              <th className="border-r border-gray-300 dark:border-gray-700 px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                Doctor
              </th>
              <th className="border-r border-gray-300 dark:border-gray-700 px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                Last Visit
              </th>
              <th className="border-r border-gray-300 dark:border-gray-700 px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                Status
              </th>
              <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-300 bg-white dark:divide-gray-700 dark:bg-gray-900">
            {loading ? (
              <tr>
                <td colSpan={6} className="py-12 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Loading patients...
                    </p>
                  </div>
                </td>
              </tr>
            ) : data.length > 0 ? (
              data.map((patient) => (
                <tr 
                  key={patient.id} 
                  className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <td className="border-r border-gray-300 dark:border-gray-700 px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
                        <img
                          width={40}
                          height={40}
                          src={patient.user.image}
                          alt={patient.user.name}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(patient.user.name)}&background=6366f1&color=ffffff`;
                          }}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-medium text-gray-900 dark:text-white">
                          {patient.user.name}
                        </p>
                        <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                          Age {patient.user.age}
                        </p>
                      </div>
                    </div>
                  </td>
                  
                  <td className="border-r border-gray-300 dark:border-gray-700 px-6 py-4">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {patient.condition}
                    </span>
                  </td>
                  
                  <td className="border-r border-gray-300 dark:border-gray-700 px-6 py-4">
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">
                        {patient.doctor.name}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {patient.doctor.specialty}
                      </p>
                    </div>
                  </td>
                  
                  <td className="border-r border-gray-300 dark:border-gray-700 px-6 py-4">
                    <span className="text-gray-900 dark:text-white">
                      {formatDate(patient.lastVisit)}
                    </span>
                  </td>
                  
                  <td className="border-r border-gray-300 dark:border-gray-700 px-6 py-4">
                    <Badge
                      size="sm"
                      color={getStatusColor(patient.status)}
                    >
                      {patient.status}
                    </Badge>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center">
                      <div className="relative">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setShowActionDropdown(showActionDropdown === patient.id ? null : patient.id)}
                          className="h-8 w-8"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                        
                        {showActionDropdown === patient.id && (
                          <div className="absolute right-0 top-10 z-50 min-w-[160px] rounded-md border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                            <button
                              onClick={() => handleAction('view', patient.id)}
                              className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                            >
                              <Eye className="h-4 w-4" />
                              View Details
                            </button>
                            <button
                              onClick={() => handleAction('edit', patient.id)}
                              className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                            >
                              <Edit className="h-4 w-4" />
                              Edit Patient
                            </button>
                            <button
                              onClick={() => handleAction('delete', patient.id)}
                              className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                            >
                              <Trash2 className="h-4 w-4" />
                              Delete Patient
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-12 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-gray-500 dark:text-gray-400">
                      No patients found
                    </p>
                    {searchTerm && (
                      <p className="text-sm text-gray-400 dark:text-gray-500">
                        Try adjusting your search terms
                      </p>
                    )}
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {!loading && data.length > 0 && (
        <div className="border-t border-gray-300 bg-gray-50 px-6 py-4 dark:border-gray-700 dark:bg-gray-800/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Showing {Math.min((currentPage - 1) * rowsPerPage + 1, totalRecords)} to{' '}
                {Math.min(currentPage * rowsPerPage, totalRecords)} of {totalRecords} patients
                {searchTerm && ` (filtered by "${searchTerm}")`}
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Page {currentPage} of {totalPages || 1}
              </p>
              
              <div className="flex gap-1">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrev}
                  disabled={currentPage === 1 || loading}
                  className="h-8 w-8"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNext}
                  disabled={currentPage === totalPages || totalPages === 0 || loading}
                  className="h-8 w-8"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close dropdown */}
      {showActionDropdown !== null && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowActionDropdown(null)}
        />
      )}
    </div>
  );
}