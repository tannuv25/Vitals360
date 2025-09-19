// import { useState, useEffect } from "react";

// import { ChevronLeft, ChevronRight, MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react";
// import Badge from "../../ui/badge/Badge";
// import Button from "../../ui/button/Button";
// import { Input } from "../../ui/input";

// interface Appointment {
//   id: string; // maps from _id.$oid
//   doctorId: string; // doctor_id
//   doctorName: string; // doctor_name
//   specialization: string; // specialization
//   fees: number; // fees
//   userId: string; // user_id
//   userName: string; // user_name
//   appointmentDate: string; // appointment_date
//   timeSlot: string; // time_slot
//   slotType: string; // slot_type
//   documents: {
//     name: string;
//     filePath: string;
//   }[];
//   status: string; // status
// }

// // Static appointment data
// const staticData: Appointment[] = [
//   {
//     id: "1",
//     doctorId: "doc1",
//     doctorName: "Dr. Smith",
//     specialization: "Cardiology",
//     fees: 150,
//     userId: "user1",
//     userName: "Sarah Johnson",
//     appointmentDate: "2024-03-15",
//     timeSlot: "10:00 AM",
//     slotType: "Morning",
//     documents: [
//       { name: "Medical History.pdf", filePath: "/docs/med_history_1.pdf" }
//     ],
//     status: "Confirmed",
//   },
//   {
//     id: "2",
//     doctorId: "doc2",
//     doctorName: "Dr. Williams",
//     specialization: "Endocrinology",
//     fees: 200,
//     userId: "user2",
//     userName: "Michael Chen",
//     appointmentDate: "2024-03-12",
//     timeSlot: "2:30 PM",
//     slotType: "Afternoon",
//     documents: [],
//     status: "Pending",
//   },
//   {
//     id: "3",
//     doctorId: "doc3",
//     doctorName: "Dr. Brown",
//     specialization: "Neurology",
//     fees: 180,
//     userId: "user3",
//     userName: "Emily Davis",
//     appointmentDate: "2024-03-18",
//     timeSlot: "11:15 AM",
//     slotType: "Morning",
//     documents: [
//       { name: "Brain Scan.pdf", filePath: "/docs/brain_scan_3.pdf" },
//       { name: "Lab Results.pdf", filePath: "/docs/lab_results_3.pdf" }
//     ],
//     status: "Confirmed",
//   },
//   {
//     id: "4",
//     doctorId: "doc4",
//     doctorName: "Dr. Jones",
//     specialization: "Rheumatology",
//     fees: 160,
//     userId: "user4",
//     userName: "Robert Wilson",
//     appointmentDate: "2024-03-10",
//     timeSlot: "3:45 PM",
//     slotType: "Afternoon",
//     documents: [],
//     status: "Completed",
//   },
//   {
//     id: "5",
//     doctorId: "doc5",
//     doctorName: "Dr. Taylor",
//     specialization: "Pulmonology",
//     fees: 170,
//     userId: "user5",
//     userName: "Lisa Anderson",
//     appointmentDate: "2024-03-20",
//     timeSlot: "9:30 AM",
//     slotType: "Morning",
//     documents: [
//       { name: "Chest X-ray.pdf", filePath: "/docs/chest_xray_5.pdf" }
//     ],
//     status: "Confirmed",
//   },
//   {
//     id: "6",
//     doctorId: "doc6",
//     doctorName: "Dr. Garcia",
//     specialization: "Psychiatry",
//     fees: 140,
//     userId: "user6",
//     userName: "David Miller",
//     appointmentDate: "2024-03-14",
//     timeSlot: "4:00 PM",
//     slotType: "Afternoon",
//     documents: [],
//     status: "Pending",
//   },
//   {
//     id: "7",
//     doctorId: "doc7",
//     doctorName: "Dr. Martinez",
//     specialization: "Obstetrics",
//     fees: 190,
//     userId: "user7",
//     userName: "Jennifer Lopez",
//     appointmentDate: "2024-03-17",
//     timeSlot: "1:15 PM",
//     slotType: "Afternoon",
//     documents: [
//       { name: "Ultrasound.pdf", filePath: "/docs/ultrasound_7.pdf" }
//     ],
//     status: "Confirmed",
//   },
//   {
//     id: "8",
//     doctorId: "doc8",
//     doctorName: "Dr. Lee",
//     specialization: "Cardiology",
//     fees: 220,
//     userId: "user8",
//     userName: "Thomas White",
//     appointmentDate: "2024-03-11",
//     timeSlot: "8:45 AM",
//     slotType: "Morning",
//     documents: [
//       { name: "ECG Report.pdf", filePath: "/docs/ecg_8.pdf" },
//       { name: "Blood Test.pdf", filePath: "/docs/blood_test_8.pdf" }
//     ],
//     status: "Confirmed",
//   },
// ];

// export default function AppointmentTable() {
//   const [data, setData] = useState<Appointment[]>(staticData);
//   const [loading, setLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [totalRecords, setTotalRecords] = useState(staticData.length);
//   const [showActionDropdown, setShowActionDropdown] = useState<string | null>(null);
  
//   const rowsPerPage = 5;

//   // API call with search and pagination
//   useEffect(() => {
//     const fetchAppointments = async () => {
//       setLoading(true);
//       try {
//         const params = new URLSearchParams({
//           search: searchTerm,
//           page: currentPage.toString(),
//           limit: rowsPerPage.toString(),
//         });

//         const response = await fetch(`/api/appointments?${params.toString()}`);
        
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const result = await response.json();
        
//         // Update state with API response
//         setData(result.data || staticData);
//         setTotalPages(result.totalPages || Math.ceil(staticData.length / rowsPerPage));
//         setTotalRecords(result.totalRecords || staticData.length);
        
//       } catch (error) {
//         console.error("API error:", error);
//         // Fallback to static data with client-side filtering
//         const filtered = staticData.filter(
//           (appointment) =>
//             appointment.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             appointment.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             appointment.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             appointment.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             appointment.slotType.toLowerCase().includes(searchTerm.toLowerCase())
//         );
        
//         const startIndex = (currentPage - 1) * rowsPerPage;
//         const endIndex = startIndex + rowsPerPage;
//         const paginatedData = filtered.slice(startIndex, endIndex);
        
//         setData(paginatedData);
//         setTotalPages(Math.ceil(filtered.length / rowsPerPage));
//         setTotalRecords(filtered.length);
//       } finally {
//         setLoading(false);
//       }
//     };

//     // Debounce search to avoid too many API calls
//     const timeoutId = setTimeout(() => {
//       fetchAppointments();
//     }, 300);

//     return () => clearTimeout(timeoutId);
//   }, [searchTerm, currentPage]);

//   // Handle search with page reset
//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1); // Reset to first page when searching
//   };

//   const handleNext = () => {
//     if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
//   };

//   const handlePrev = () => {
//     if (currentPage > 1) setCurrentPage((prev) => prev - 1);
//   };

//   const getStatusColor = (status: string) => {
//     switch (status.toLowerCase()) {
//       case 'confirmed':
//         return 'success';
//       case 'pending':
//         return 'warning';
//       case 'completed':
//         return 'error';
//       case 'cancelled':
//         return 'error';
//       default:
//         return 'error';
//     }
//   };

//   const formatDate = (dateString: string) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//       month: 'short',
//       day: 'numeric',
//       year: 'numeric'
//     });
//   };

//   const handleAction = (action: string, appointmentId: string) => {
//     console.log(`${action} action for appointment ID: ${appointmentId}`);
//     setShowActionDropdown(null);
//     // Add your action handling logic here
//   };

//   return (
//     <div className="overflow-hidden rounded-xl border border-gray-300 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
//       {/* Header */}
//       <div className="border-b border-gray-300 bg-gray-50 px-6 py-4 dark:border-gray-700 dark:bg-gray-800/50">
//         <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
//           <div>
//             <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//               Appointment List
//             </h3>
//             <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
//               Manage and view all appointment records
//             </p>
//           </div>
//           <div className="flex items-center gap-3">
//             <Input
//               placeholder="Search appointments..."
//               value={searchTerm}
//               onChange={handleSearchChange}
//               className="w-64"
//               disabled={loading}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse">
//           <thead className="sticky top-0 bg-gray-50 dark:bg-gray-800/50">
//             <tr className="border-b border-gray-300 dark:border-gray-700">
//               <th className="border-r border-gray-300 dark:border-gray-700 px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
//                 Patient
//               </th>
//               <th className="border-r border-gray-300 dark:border-gray-700 px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
//                 Doctor
//               </th>
//               <th className="border-r border-gray-300 dark:border-gray-700 px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
//                 Appointment
//               </th>
//               <th className="border-r border-gray-300 dark:border-gray-700 px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
//                 Fees
//               </th>
//               <th className="border-r border-gray-300 dark:border-gray-700 px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
//                 Status
//               </th>
//               <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
//                 Actions
//               </th>
//             </tr>
//           </thead>

//           <tbody className="divide-y divide-gray-300 bg-white dark:divide-gray-700 dark:bg-gray-900">
//             {loading ? (
//               <tr>
//                 <td colSpan={6} className="py-12 text-center">
//                   <div className="flex flex-col items-center gap-2">
//                     <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
//                     <p className="text-gray-500 dark:text-gray-400">
//                       Loading appointments...
//                     </p>
//                   </div>
//                 </td>
//               </tr>
//             ) : data.length > 0 ? (
//               data.map((appointment) => (
//                 <tr 
//                   key={appointment.id} 
//                   className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
//                 >
//                   <td className="border-r border-gray-300 dark:border-gray-700 px-6 py-4">
//                     <div className="flex items-center gap-3">
//                       <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
//                         <img
//                           width={40}
//                           height={40}
//                           src={`https://ui-avatars.com/api/?name=${encodeURIComponent(appointment.userName)}&background=6366f1&color=ffffff`}
//                           alt={appointment.userName}
//                           className="h-full w-full object-cover"
//                         />
//                       </div>
//                       <div className="min-w-0 flex-1">
//                         <p className="truncate font-medium text-gray-900 dark:text-white">
//                           {appointment.userName}
//                         </p>
//                         <p className="truncate text-sm text-gray-500 dark:text-gray-400">
//                           ID: {appointment.userId}
//                         </p>
//                       </div>
//                     </div>
//                   </td>
                  
//                   <td className="border-r border-gray-300 dark:border-gray-700 px-6 py-4">
//                     <div>
//                       <p className="font-medium text-gray-900 dark:text-white">
//                         {appointment.doctorName}
//                       </p>
//                       <p className="text-sm text-gray-500 dark:text-gray-400">
//                         {appointment.specialization}
//                       </p>
//                     </div>
//                   </td>
                  
//                   <td className="border-r border-gray-300 dark:border-gray-700 px-6 py-4">
//                     <div>
//                       <p className="font-medium text-gray-900 dark:text-white">
//                         {formatDate(appointment.appointmentDate)}
//                       </p>
//                       <p className="text-sm text-gray-500 dark:text-gray-400">
//                         {appointment.timeSlot} ({appointment.slotType})
//                       </p>
//                     </div>
//                   </td>
                  
//                   <td className="border-r border-gray-300 dark:border-gray-700 px-6 py-4">
//                     <span className="font-medium text-gray-900 dark:text-white">
//                       ${appointment.fees}
//                     </span>
//                   </td>
                  
//                   <td className="border-r border-gray-300 dark:border-gray-700 px-6 py-4">
//                     <Badge
//                       size="sm"
//                       color={getStatusColor(appointment.status)}
//                     >
//                       {appointment.status}
//                     </Badge>
//                   </td>

//                   <td className="px-6 py-4">
//                     <div className="flex justify-center">
//                       <div className="relative">
//                         <Button
//                           variant="outline"
//                           size="icon"
//                           onClick={() => setShowActionDropdown(showActionDropdown === appointment.id ? null : appointment.id)}
//                           className="h-8 w-8"
//                         >
//                           <MoreHorizontal className="h-4 w-4" />
//                         </Button>
                        
//                         {showActionDropdown === appointment.id && (
//                           <div className="absolute right-0 top-10 z-50 min-w-[160px] rounded-md border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-700 dark:bg-gray-800">
//                             <button
//                               onClick={() => handleAction('view', appointment.id)}
//                               className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
//                             >
//                               <Eye className="h-4 w-4" />
//                               View Details
//                             </button>
//                             <button
//                               onClick={() => handleAction('edit', appointment.id)}
//                               className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
//                             >
//                               <Edit className="h-4 w-4" />
//                               Edit Appointment
//                             </button>
//                             <button
//                               onClick={() => handleAction('delete', appointment.id)}
//                               className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
//                             >
//                               <Trash2 className="h-4 w-4" />
//                               Cancel Appointment
//                             </button>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={6} className="py-12 text-center">
//                   <div className="flex flex-col items-center gap-2">
//                     <p className="text-gray-500 dark:text-gray-400">
//                       No appointments found
//                     </p>
//                     {searchTerm && (
//                       <p className="text-sm text-gray-400 dark:text-gray-500">
//                         Try adjusting your search terms
//                       </p>
//                     )}
//                   </div>
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       {!loading && data.length > 0 && (
//         <div className="border-t border-gray-300 bg-gray-50 px-6 py-4 dark:border-gray-700 dark:bg-gray-800/50">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-2">
//               <p className="text-sm text-gray-500 dark:text-gray-400">
//                 Showing {Math.min((currentPage - 1) * rowsPerPage + 1, totalRecords)} to{' '}
//                 {Math.min(currentPage * rowsPerPage, totalRecords)} of {totalRecords} appointments
//                 {searchTerm && ` (filtered by "${searchTerm}")`}
//               </p>
//             </div>
            
//             <div className="flex items-center gap-2">
//               <p className="text-sm text-gray-500 dark:text-gray-400">
//                 Page {currentPage} of {totalPages || 1}
//               </p>
              
//               <div className="flex gap-1">
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={handlePrev}
//                   disabled={currentPage === 1 || loading}
//                   className="h-8 w-8"
//                 >
//                   <ChevronLeft className="h-4 w-4" />
//                 </Button>
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={handleNext}
//                   disabled={currentPage === totalPages || totalPages === 0 || loading}
//                   className="h-8 w-8"
//                 >
//                   <ChevronRight className="h-4 w-4" />
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Click outside to close dropdown */}
//       {showActionDropdown !== null && (
//         <div 
//           className="fixed inset-0 z-40" 
//           onClick={() => setShowActionDropdown(null)}
//         />
//       )}
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal, Eye, Edit, Trash2, FileText, Calendar, Clock, User, Stethoscope, IndianRupeeIcon } from "lucide-react";
import Badge from "../../ui/badge/Badge";
import Button from "../../ui/button/Button";
import { Input } from "../../ui/input";

interface Appointment {
  id: string; // maps from _id.$oid
  doctorId: string; // doctor_id
  doctorName: string; // doctor_name
  specialization: string; // specialization
  fees: number; // fees
  userId: string; // user_id
  userName: string; // user_name
  appointmentDate: string; // appointment_date
  timeSlot: string; // time_slot
  slotType: string; // slot_type
  documents: {
    name: string;
    filePath: string;
  }[];
  status: string; // status
}

// Static appointment data
const staticData: Appointment[] = [
  {
    id: "507f1f77bcf86cd799439011",
    doctorId: "doc_001",
    doctorName: "Dr. Sarah Mitchell",
    specialization: "Cardiology",
    fees: 250,
    userId: "usr_101",
    userName: "John Anderson",
    appointmentDate: "2024-03-25",
    timeSlot: "09:30 AM",
    slotType: "Morning",
    documents: [
      { name: "ECG_Report.pdf", filePath: "/documents/ecg_report_001.pdf" },
      { name: "Blood_Test_Results.pdf", filePath: "/documents/blood_test_001.pdf" }
    ],
    status: "Confirmed",
  },
  {
    id: "507f1f77bcf86cd799439012",
    doctorId: "doc_002",
    doctorName: "Dr. Michael Thompson",
    specialization: "Dermatology",
    fees: 180,
    userId: "usr_102",
    userName: "Emma Rodriguez",
    appointmentDate: "2024-03-26",
    timeSlot: "02:15 PM",
    slotType: "Afternoon",
    documents: [
      { name: "Skin_Biopsy_Report.pdf", filePath: "/documents/biopsy_002.pdf" }
    ],
    status: "Pending",
  },
  {
    id: "507f1f77bcf86cd799439013",
    doctorId: "doc_003",
    doctorName: "Dr. Lisa Chen",
    specialization: "Pediatrics",
    fees: 160,
    userId: "usr_103",
    userName: "Sophie Williams",
    appointmentDate: "2024-03-27",
    timeSlot: "11:00 AM",
    slotType: "Morning",
    documents: [
      { name: "Vaccination_Record.pdf", filePath: "/documents/vaccination_003.pdf" },
      { name: "Growth_Chart.pdf", filePath: "/documents/growth_chart_003.pdf" },
      { name: "Medical_History.pdf", filePath: "/documents/med_history_003.pdf" }
    ],
    status: "Confirmed",
  },
  {
    id: "507f1f77bcf86cd799439014",
    doctorId: "doc_004",
    doctorName: "Dr. Robert Kim",
    specialization: "Orthopedics",
    fees: 300,
    userId: "usr_104",
    userName: "Marcus Johnson",
    appointmentDate: "2024-03-28",
    timeSlot: "04:45 PM",
    slotType: "Evening",
    documents: [],
    status: "Completed",
  },
  {
    id: "507f1f77bcf86cd799439015",
    doctorId: "doc_005",
    doctorName: "Dr. Amanda Foster",
    specialization: "Gynecology",
    fees: 220,
    userId: "usr_105",
    userName: "Isabella Martinez",
    appointmentDate: "2024-03-29",
    timeSlot: "08:00 AM",
    slotType: "Morning",
    documents: [
      { name: "Ultrasound_Report.pdf", filePath: "/documents/ultrasound_005.pdf" },
      { name: "Lab_Results.pdf", filePath: "/documents/lab_005.pdf" }
    ],
    status: "Confirmed",
  },
  {
    id: "507f1f77bcf86cd799439016",
    doctorId: "doc_006",
    doctorName: "Dr. James Wilson",
    specialization: "Neurology",
    fees: 350,
    userId: "usr_106",
    userName: "Alexander Brown",
    appointmentDate: "2024-03-30",
    timeSlot: "01:30 PM",
    slotType: "Afternoon",
    documents: [
      { name: "MRI_Scan.pdf", filePath: "/documents/mri_006.pdf" }
    ],
    status: "Pending",
  },
  {
    id: "507f1f77bcf86cd799439017",
    doctorId: "doc_007",
    doctorName: "Dr. Rachel Davis",
    specialization: "Ophthalmology",
    fees: 200,
    userId: "usr_107",
    userName: "Olivia Taylor",
    appointmentDate: "2024-04-01",
    timeSlot: "10:15 AM",
    slotType: "Morning",
    documents: [
      { name: "Eye_Exam_Report.pdf", filePath: "/documents/eye_exam_007.pdf" },
      { name: "Vision_Test_Results.pdf", filePath: "/documents/vision_007.pdf" }
    ],
    status: "Confirmed",
  },
  {
    id: "507f1f77bcf86cd799439018",
    doctorId: "doc_008",
    doctorName: "Dr. Kevin Lee",
    specialization: "Psychiatry",
    fees: 280,
    userId: "usr_108",
    userName: "Ethan Garcia",
    appointmentDate: "2024-04-02",
    timeSlot: "03:00 PM",
    slotType: "Afternoon",
    documents: [
      { name: "Psychological_Assessment.pdf", filePath: "/documents/psych_008.pdf" }
    ],
    status: "Cancelled",
  },
  {
    id: "507f1f77bcf86cd799439019",
    doctorId: "doc_009",
    doctorName: "Dr. Patricia Moore",
    specialization: "Endocrinology",
    fees: 240,
    userId: "usr_109",
    userName: "Ava Thompson",
    appointmentDate: "2024-04-03",
    timeSlot: "09:00 AM",
    slotType: "Morning",
    documents: [
      { name: "Hormone_Panel.pdf", filePath: "/documents/hormone_009.pdf" },
      { name: "Thyroid_Function_Test.pdf", filePath: "/documents/thyroid_009.pdf" }
    ],
    status: "Confirmed",
  },
  {
    id: "507f1f77bcf86cd799439020",
    doctorId: "doc_010",
    doctorName: "Dr. Christopher White",
    specialization: "Urology",
    fees: 190,
    userId: "usr_110",
    userName: "Benjamin Clark",
    appointmentDate: "2024-04-04",
    timeSlot: "05:30 PM",
    slotType: "Evening",
    documents: [
      { name: "Kidney_Function_Test.pdf", filePath: "/documents/kidney_010.pdf" }
    ],
    status: "Pending",
  }
];

export default function AppointmentTable() {
  const [data, setData] = useState<Appointment[]>(staticData);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(staticData.length);
  const [showActionDropdown, setShowActionDropdown] = useState<string | null>(null);
  
  const rowsPerPage = 5;

  // API call with search and pagination
  useEffect(() => {
    const fetchAppointments = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          search: searchTerm,
          page: currentPage.toString(),
          limit: rowsPerPage.toString(),
        });

        const response = await fetch(`/api/appointments?${params.toString()}`);
        
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
          (appointment) =>
            appointment.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            appointment.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            appointment.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
            appointment.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
            appointment.slotType.toLowerCase().includes(searchTerm.toLowerCase()) ||
            appointment.userId.toLowerCase().includes(searchTerm.toLowerCase()) ||
            appointment.doctorId.toLowerCase().includes(searchTerm.toLowerCase())
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
      fetchAppointments();
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
      case 'confirmed':
        return 'success';
      case 'pending':
        return 'warning';
      case 'completed':
        return 'success';
      case 'cancelled':
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

  const handleAction = (action: string, appointmentId: string) => {
    console.log(`${action} action for appointment ID: ${appointmentId}`);
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
              Appointment Management System
            </h3>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              Comprehensive appointment tracking with patient and doctor details
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Input
              placeholder="Search appointments, patients, doctors..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-80"
              disabled={loading}
            />
          </div>
        </div>
      </div>

      {/* Expanded Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[1400px]">
          <thead className="sticky top-0 bg-gray-50 dark:bg-gray-800/50">
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <th className="border-r border-gray-300 dark:border-gray-700 px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 min-w-[200px]">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Patient Information
                </div>
              </th>
              <th className="border-r border-gray-300 dark:border-gray-700 px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 min-w-[200px]">
                <div className="flex items-center gap-2">
                  <Stethoscope className="h-4 w-4" />
                  Doctor Details
                </div>
              </th>
              <th className="border-r border-gray-300 dark:border-gray-700 px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 min-w-[180px]">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Date & Time
                </div>
              </th>
              <th className="border-r border-gray-300 dark:border-gray-700 px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 min-w-[120px]">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Slot Type
                </div>
              </th>
              <th className="border-r border-gray-300 dark:border-gray-700 px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 min-w-[100px]">
                <div className="flex items-center gap-2">
                  <IndianRupeeIcon className="h-4 w-4" />
                  Fees
                </div>
              </th>
              <th className="border-r border-gray-300 dark:border-gray-700 px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 min-w-[160px]">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Documents
                </div>
              </th>
              <th className="border-r border-gray-300 dark:border-gray-700 px-4 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 min-w-[120px]">
                Status
              </th>
              <th className="px-4 py-4 text-center text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 min-w-[100px]">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-300 bg-white dark:divide-gray-700 dark:bg-gray-900">
            {loading ? (
              <tr>
                <td colSpan={8} className="py-12 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-600 border-t-transparent"></div>
                    <p className="text-gray-500 dark:text-gray-400">
                      Loading appointments...
                    </p>
                  </div>
                </td>
              </tr>
            ) : data.length > 0 ? (
              data.map((appointment) => (
                <tr 
                  key={appointment.id} 
                  className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  {/* Patient Information */}
                  <td className="border-r border-gray-300 dark:border-gray-700 px-4 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-blue-500 to-purple-600">
                        <img
                          width={48}
                          height={48}
                          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(appointment.userName)}&background=random&color=ffffff&size=48`}
                          alt={appointment.userName}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">
                          {appointment.userName}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          ID: {appointment.userId}
                        </p>
                        <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                          Appointment: {appointment.id.slice(-6)}
                        </p>
                      </div>
                    </div>
                  </td>
                  
                  {/* Doctor Details */}
                  <td className="border-r border-gray-300 dark:border-gray-700 px-4 py-4">
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">
                        {appointment.doctorName}
                      </p>
                      <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {appointment.specialization}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Doc ID: {appointment.doctorId}
                      </p>
                    </div>
                  </td>
                  
                  {/* Date & Time */}
                  <td className="border-r border-gray-300 dark:border-gray-700 px-4 py-4">
                    <div className="space-y-1">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">
                        {formatDate(appointment.appointmentDate)}
                      </p>
                      <p className="text-sm text-green-600 dark:text-green-400 font-medium">
                        {appointment.timeSlot}
                      </p>
                    </div>
                  </td>
                  
                  {/* Slot Type */}
                  <td className="border-r border-gray-300 dark:border-gray-700 px-4 py-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                      {appointment.slotType}
                    </span>
                  </td>
                  
                  {/* Fees */}
                  <td className="border-r border-gray-300 dark:border-gray-700 px-4 py-4">
                    <div className="flex items-center">
                      <span className="text-lg font-bold text-green-600 dark:text-green-400">
                        ₹{appointment.fees}
                      </span>
                    </div>
                  </td>
                  
                  {/* Documents */}
                  <td className="border-r border-gray-300 dark:border-gray-700 px-4 py-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-blue-500" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {appointment.documents.length} files
                        </span>
                      </div>
                      {appointment.documents.length > 0 ? (
                        <div className="space-y-1">
                          {appointment.documents.slice(0, 2).map((doc, index) => (
                            <p key={index} className="text-xs text-blue-600 dark:text-blue-400 truncate">
                              {doc.name}
                            </p>
                          ))}
                          {appointment.documents.length > 2 && (
                            <p className="text-xs text-gray-500">
                              +{appointment.documents.length - 2} more
                            </p>
                          )}
                        </div>
                      ) : (
                        <p className="text-xs text-gray-400">No documents</p>
                      )}
                    </div>
                  </td>
                  
                  {/* Status */}
                  <td className="border-r border-gray-300 dark:border-gray-700 px-4 py-4">
                    <Badge
                      size="sm"
                      color={getStatusColor(appointment.status)}
                    >
                      {appointment.status}
                    </Badge>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-4">
                    <div className="flex justify-center">
                      <div className="relative">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => setShowActionDropdown(showActionDropdown === appointment.id ? null : appointment.id)}
                          className="h-8 w-8"
                        >
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                        
                        {showActionDropdown === appointment.id && (
                          <div className="absolute right-0 top-10 z-50 min-w-[160px] rounded-md border border-gray-200 bg-white py-1 shadow-lg dark:border-gray-700 dark:bg-gray-800">
                            <button
                              onClick={() => handleAction('view', appointment.id)}
                              className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                            >
                              <Eye className="h-4 w-4" />
                              View Details
                            </button>
                            <button
                              onClick={() => handleAction('edit', appointment.id)}
                              className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                            >
                              <Edit className="h-4 w-4" />
                              Edit Appointment
                            </button>
                            <button
                              onClick={() => handleAction('delete', appointment.id)}
                              className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/20"
                            >
                              <Trash2 className="h-4 w-4" />
                              Cancel Appointment
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
                <td colSpan={8} className="py-12 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-gray-500 dark:text-gray-400">
                      No appointments found
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
                {Math.min(currentPage * rowsPerPage, totalRecords)} of {totalRecords} appointments
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