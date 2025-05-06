
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCollegeById, College } from "@/data/collegeData";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CollegeRating from "@/components/college/CollegeRating";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, MapPin, Star } from "lucide-react";

const CollegeDetail = () => {
  const { stateId, collegeId } = useParams<{ stateId: string; collegeId: string }>();
  const [college, setCollege] = useState<College | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (collegeId && stateId) {
      const fetchedCollege = getCollegeById(collegeId, stateId);
      setCollege(fetchedCollege || null);
      setLoading(false);
    }
  }, [collegeId, stateId]);
  
  if (loading) {
    return (
      <div className="section-container py-12">
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <div className="w-16 h-16 border-4 border-t-nextstep-blue rounded-full animate-spin"></div>
          <p className="mt-4 text-lg">Loading college details...</p>
        </div>
      </div>
    );
  }
  
  if (!college) {
    return (
      <div className="section-container py-12">
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <h2 className="text-2xl font-semibold mb-4">College not found</h2>
          <Link to={`/top-colleges/${stateId}`}>
            <Button>Back to Colleges</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-12">
      <div className="section-container">
        <Link to={`/colleges/${cityId}`}>
          <Button variant="ghost" className="mb-6">
            <ChevronLeft className="h-4 w-4 mr-2" />
            Back to {cityId?.charAt(0).toUpperCase() + cityId?.slice(1)} Colleges
          </Button>
        </Link>
        
        {/* College Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{college.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="secondary" className="text-nextstep-blue">
                  {college.type}
                </Badge>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
                  <span className="text-muted-foreground">
                    {college.location.city}, {college.location.state}
                  </span>
                </div>
                <div className="flex items-center">
                  <CollegeRating rating={college.rating} />
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button>Apply Now</Button>
              <Button variant="outline" className="flex items-center gap-1">
                <Star className="h-4 w-4" /> Save
              </Button>
            </div>
          </div>
          
          <div 
            className="w-full h-64 md:h-80 bg-cover bg-center rounded-lg mb-6"
            style={{ 
              backgroundImage: college.imageUrl 
                ? `url(${college.imageUrl})` 
                : "url('/placeholder.svg')"
            }}
          ></div>
        </div>
        
        {/* College Details */}
        <Tabs defaultValue="overview">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="admission">Admission</TabsTrigger>
            <TabsTrigger value="fees">Fees & Scholarships</TabsTrigger>
            <TabsTrigger value="placement">Placement</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>About {college.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">{college.description}</p>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Location</h3>
                  <p>{college.location.address}</p>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-nextstep-blue/10">
                        Top Courses
                      </Badge>
                      <span>{college.courses.slice(0, 3).join(", ")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-nextstep-green/10">
                        Placement
                      </Badge>
                      <span>{college.placement.percentage}% placed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-nextstep-purple/10">
                        Rating
                      </Badge>
                      <span>{college.rating}/5</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-nextstep-red/10">
                        College Type
                      </Badge>
                      <span>{college.type}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>Courses Offered</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {college.courses.map((course, index) => (
                    <Card key={index} className="shadow-sm border">
                      <CardContent className="p-4">
                        <h3 className="text-lg font-medium mb-2">{course}</h3>
                        <div className="text-sm text-muted-foreground">
                          <p>Duration: 4 Years</p>
                          <p>Eligibility: 10+2 with Physics, Chemistry, Mathematics</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Entrance Exams</h3>
                  <div className="flex flex-wrap gap-2">
                    {college.entranceExams.map((exam, index) => (
                      <Badge key={index} variant="secondary">{exam}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="admission">
            <Card>
              <CardHeader>
                <CardTitle>Admission Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Eligibility</h3>
                  <p>{college.admissionDetails.eligibility}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Admission Process</h3>
                  <p>{college.admissionDetails.process}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Important Deadlines</h3>
                  <p>{college.admissionDetails.deadlines}</p>
                </div>
                <div className="pt-4">
                  <Button className="bg-gradient-to-r from-nextstep-blue to-nextstep-purple">
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="fees">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Fee Structure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Tuition Fee</span>
                      <span>₹{college.fees.tuition.min.toLocaleString()} - ₹{college.fees.tuition.max.toLocaleString()}</span>
                    </div>
                    {college.fees.hostel && (
                      <div className="flex justify-between">
                        <span className="font-medium">Hostel Fee</span>
                        <span>₹{college.fees.hostel.min.toLocaleString()} - ₹{college.fees.hostel.max.toLocaleString()}</span>
                      </div>
                    )}
                  </div>
                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground">
                      Note: Fees are indicative and may vary based on the specific course chosen.
                      Additional charges may apply for lab facilities, examination fees, etc.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Scholarships</CardTitle>
                </CardHeader>
                <CardContent>
                  {college.scholarships.map((scholarship, index) => (
                    <div key={index} className="mb-4 pb-4 border-b last:border-0">
                      <h4 className="font-semibold text-lg">{scholarship.name}</h4>
                      <div className="flex flex-col gap-1 mt-2">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Amount:</span>
                          <span>{scholarship.amount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Eligibility:</span>
                          <span>{scholarship.eligibility}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  {college.scholarships.length === 0 && (
                    <p>No scholarship information available for this college.</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="placement">
            <Card>
              <CardHeader>
                <CardTitle>Placement Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-nextstep-blue/10 rounded-lg p-6 text-center">
                    <span className="text-3xl font-bold text-nextstep-blue">
                      {college.placement.percentage}%
                    </span>
                    <p className="mt-2 text-muted-foreground">Placement Rate</p>
                  </div>
                  {college.placement.avgSalary && (
                    <div className="bg-nextstep-green/10 rounded-lg p-6 text-center">
                      <span className="text-3xl font-bold text-nextstep-green">
                        ₹{(college.placement.avgSalary / 100000).toFixed(1)}L
                      </span>
                      <p className="mt-2 text-muted-foreground">Average Package</p>
                    </div>
                  )}
                  <div className="bg-nextstep-purple/10 rounded-lg p-6 text-center">
                    <span className="text-3xl font-bold text-nextstep-purple">
                      {college.placement.topRecruiters?.length || 0}+
                    </span>
                    <p className="mt-2 text-muted-foreground">Top Recruiters</p>
                  </div>
                </div>
                
                {college.placement.topRecruiters && college.placement.topRecruiters.length > 0 && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Top Recruiters</h3>
                    <div className="flex flex-wrap gap-2">
                      {college.placement.topRecruiters.map((recruiter, index) => (
                        <Badge key={index} variant="outline" className="px-3 py-1">
                          {recruiter}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CollegeDetail;
