export const featureMenu = ["Key Features", "Testimonials", "Why Choose Us", "Features", "E-Catalog", "Integrations", "Reliability", "Clients"].map((l) => ({ l, h: "#" + l.toLowerCase().replace(/[^a-z]+/g, "-") }));
export const keyFeatures = [
  { t: "Simple, mobile-friendly design", d: "Staff learn it in a day. Works on any phone.", b: ["Clean, guided screens", "Fully responsive", "English, Bangla, Arabic"] },
  { t: "Profiles for everyone", d: "Students, teachers, admins and staff in one place.", b: ["Custom fields", "Documents and photos", "Promote and transfer in bulk"] },
  { t: "Notices and calendar", d: "Share the academic year and push instant updates.", b: ["Yearly calendar", "Notices with attachments", "Scheduled publishing"] },
  { t: "Attendance", d: "Record by hand or connect fingerprint and card readers.", b: ["Live charts", "Parent alerts", "Syncs to results and payroll"] },
  { t: "Results and analytics", d: "From marks entry to printable report cards.", b: ["Custom transcripts", "Tabulation sheets", "Merit and failure lists"] },
  { t: "Fees and accounts", d: "Collect online or at the desk, with clean reports.", b: ["Receipts and dues", "Waivers and discounts", "Reminder SMS"] },
  { t: "Payroll and leave", d: "Monthly salary runs with attendance rules.", b: ["Provident funds", "Leave approvals", "Salary certificates"] },
  { t: "Inventory and library", d: "Know what you own and who has borrowed it.", b: ["Low-stock alerts", "Lending and overdue notices", "Supplier payments"] },
];
export const whyStats = [["100K+", "Students, parents and staff use the platform"], ["99%", "Client satisfaction with fast support"], ["99.9%", "Server uptime, all day"]];
export const whyGrid = [
  ["Feature-complete from day one", "Covers most institutional needs out of the box."], ["Simple by design", "No long manuals, just clear screens."],
  ["Support that responds", "Real people, real-time help."], ["Trusted by 200+ institutions", "Proven across schools and colleges."],
  ["Built for mobile", "Touch-friendly on small screens."], ["Communication built in", "Email, SMS and in-app messages."],
];
export const glance = [
  ["Student information", "Admit, update, promote and transfer students."], ["Attendance", "Daily tracking with guardian alerts."], ["Leave", "Apply and approve online."],
  ["Results", "Marks entry and report cards."], ["Class routine", "Generate and publish routines."], ["Exam schedule", "Class-wise schedules with alerts."],
  ["Syllabus", "Share it online, save printing."], ["Class notes", "Reuse notes across batches."], ["Fees", "Dues, waivers and online payment."],
  ["Notices", "Publish now or schedule."], ["Events and plans", "Plan the whole session early."], ["Messaging", "Talk to staff and parents."],
  ["Inventory", "Warehouse and branch stock."], ["SMS", "Send bulk SMS at low cost."], ["Logins", "Separate student and teacher portals."],
];
export const integrations = ["Bulk SMS", "Card payments", "Mobile wallets", "Fingerprint devices", "Card readers", "ID lookup", "Email", "Accounting export"];
export const testimonials = [
  { q: "Analytics gives us a clear view of attendance, progress and fees in one place.", n: "A. Rahman", p: "Principal, Riverside College" },
  { q: "Easy to learn, and reports that used to take days now take minutes.", n: "K. Ali", p: "Headmaster, Hillcrest School" },
  { q: "Support is quick and the mobile app keeps parents engaged.", n: "S. Haque", p: "Secretary, Northfield Academy" },
  { q: "Our online classes ran smoothly during closures.", n: "I. Chowdhury", p: "Director, Al Noor Madrasah" },
  { q: "Everything we need sits at one central place.", n: "M. Hussain", p: "Principal, Lakeside College" },
  { q: "Professional, cooperative and always available.", n: "F. Begum", p: "Headmistress, Greenfield School" },
];
export const clients = ["Riverside College", "Hillcrest School", "Al Noor Madrasah", "St. Mary Medical College", "Northfield Academy", "Bright Minds Academy", "Unity University", "Nur Education Family", "Lakeside College", "Greenfield School", "Oakwood Cadet Madrasah", "City International School"]
  .map((n, i) => ({ n, c: ["Dhaka", "Sylhet", "Savar", "Khulna"][i % 4], s: (500 + i * 370).toLocaleString() + "+" }));
export const plans = [
  { n: "Basic", tag: "Profiles, attendance, results", p: "$1", min: "$25", f: ["Student info", "Attendance", "Results", "Notices & events", "SMS"] },
  { n: "Standard", tag: "HR and academics", p: "$2", min: "$40", inc: "Basic", f: ["Student & teacher login", "Online admission", "Employee attendance", "Leave", "Routine, syllabus, diary"] },
  { n: "Enhanced", tag: "Fees, accounts, inventory", p: "$3", min: "$60", inc: "Standard", pop: true, f: ["Fees collection", "Dues reports", "Accounts", "Inventory", "Payroll"] },
  { n: "Premium", tag: "Everything, customized", p: "", min: "", inc: "Enhanced", f: ["ID cards", "Library", "Hostel & donations", "Priority support", "Custom reports"] },
];
export const faqs = [
  { q: "What is LearnDesk?", a: "Software that runs your institution: admissions, attendance, results, fees and communication." },
  { q: "Is it online or desktop?", a: "It is cloud based. No servers to buy, and backups are automatic." },
  { q: "Does it work on mobile?", a: "Yes, with apps for Android and iOS and a mobile-friendly site." },
  { q: "Which countries do you serve?", a: "Anywhere with an internet connection." },
  { q: "Can you build our website?", a: "Yes, we can scope it alongside the software." },
];
