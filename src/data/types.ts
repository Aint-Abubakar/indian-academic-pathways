
export interface State {
  id: string;
  name: string;
  collegeCount: number;
  topColleges: string[];
  imageUrl: string;
}

export interface College {
  id: string;
  name: string;
  description: string;
  type: "Government" | "Private";
  location: string;
  rating: number;
  courses: string[];
  fees: {
    tuition: { min: number; max: number };
    hostel?: { min: number; max: number };
    other?: { min: number; max: number };
  };
  placement: {
    percentage: number;
    averagePackage?: number;
    avgSalary?: number;
    highestPackage?: number;
    topRecruiters?: string[];
    topCompanies?: string[];
  };
  admission?: {
    examAccepted: string[];
    cutoff: string;
    applicationDeadline: string;
  };
  admissionDetails?: {
    eligibility: string;
    process: string;
    deadlines: string;
  };
  facilities?: string[];
  imageUrl?: string;
  entranceExams?: string[];
  scholarships?: Array<{
    name: string;
    amount: string;
    eligibility: string;
  }>;
}

export interface FilterOptions {
  searchQuery: string;
  courseType: string;
  collegeType: string;
  ratingMin: number;
  feeRange: string;
}
