import { BookOpen, Music, ExternalLink, Download } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const examBooks = {
  JEE: {
    subjects: {
      Physics: [
        { title: "Concepts of Physics by H.C. Verma (Vol 1 & 2)", link: "https://www.amazon.in/dp/8177091875" },
        { title: "Fundamentals of Physics by Halliday, Resnick & Walker", link: "https://www.amazon.in/dp/1118230736" },
        { title: "Problems in General Physics by I.E. Irodov", link: "https://www.amazon.in/dp/8123902166" }
      ],
      Chemistry: [
        { title: "Organic Chemistry by O.P. Tandon", link: "https://www.amazon.in/dp/8186299815" },
        { title: "Physical Chemistry by P. Bahadur", link: "https://www.amazon.in/dp/8121925622" },
        { title: "Inorganic Chemistry by J.D. Lee", link: "https://www.amazon.in/dp/0198503652" }
      ],
      Mathematics: [
        { title: "Mathematics for Class 11 & 12 by R.D. Sharma", link: "https://www.amazon.in/dp/9352031962" },
        { title: "Higher Algebra by Hall & Knight", link: "https://www.amazon.in/dp/8188222011" },
        { title: "Plane Trigonometry by S.L. Loney", link: "https://www.amazon.in/dp/8188222003" }
      ]
    }
  },
  "MHT CET": {
    subjects: {
      Physics: [
        { title: "Target MHT CET Physics by Disha Publications", link: "https://www.amazon.in/dp/9387521494" },
        { title: "MHT CET Physics Guide by MTG", link: "https://www.amazon.in/dp/9389167183" },
        { title: "Maharashtra HSC Physics Textbook", link: "https://www.amazon.in/dp/8171821944" }
      ],
      Chemistry: [
        { title: "Target MHT CET Chemistry by Disha Publications", link: "https://www.amazon.in/dp/9387521486" },
        { title: "MHT CET Chemistry Guide by MTG", link: "https://www.amazon.in/dp/9389167191" },
        { title: "Maharashtra HSC Chemistry Textbook", link: "https://www.amazon.in/dp/8171821952" }
      ],
      Mathematics: [
        { title: "Target MHT CET Mathematics by Disha Publications", link: "https://www.amazon.in/dp/9387521478" },
        { title: "MHT CET Mathematics Guide by MTG", link: "https://www.amazon.in/dp/9389167175" },
        { title: "Maharashtra HSC Mathematics Textbook", link: "https://www.amazon.in/dp/8171821960" }
      ],
      Biology: [
        { title: "Target MHT CET Biology by Disha Publications", link: "https://www.amazon.in/dp/9387521502" },
        { title: "MHT CET Biology Guide by MTG", link: "https://www.amazon.in/dp/9389167207" },
        { title: "Maharashtra HSC Biology Textbook", link: "https://www.amazon.in/dp/8171821979" }
      ]
    }
  },
  NEET: {
    subjects: {
      Physics: [
        { title: "NCERT Physics Class 11 & 12", link: "https://ncert.nic.in/textbook.php" },
        { title: "Objective Physics by DC Pandey", link: "https://www.amazon.in/dp/8188222054" },
        { title: "Complete NEET Guide Physics by MTG", link: "https://www.amazon.in/dp/9386561611" }
      ],
      Chemistry: [
        { title: "NCERT Chemistry Class 11 & 12", link: "https://ncert.nic.in/textbook.php" },
        { title: "Modern Approach to Chemical Calculations by R.C. Mukherjee", link: "https://www.amazon.in/dp/8186299637" },
        { title: "Complete NEET Guide Chemistry by MTG", link: "https://www.amazon.in/dp/938656162X" }
      ],
      Biology: [
        { title: "NCERT Biology Class 11 & 12", link: "https://ncert.nic.in/textbook.php" },
        { title: "Objective Biology by Dinesh", link: "https://www.amazon.in/dp/8186299866" },
        { title: "Complete NEET Guide Biology by MTG", link: "https://www.amazon.in/dp/9386561638" }
      ]
    }
  }
};

const focusedMusic = [
  {
    title: "Binaural Beats for Deep Focus",
    description: "40Hz binaural beats to enhance concentration and memory retention",
    duration: "1 hour",
    link: "https://www.youtube.com/watch?v=GqXEJm8xjIE",
    type: "Binaural"
  },
  {
    title: "Classical Music for Studying",
    description: "Mozart and Bach compositions proven to improve cognitive function",
    duration: "2 hours",
    link: "https://www.youtube.com/watch?v=jgpJVI3tDbY",
    type: "Classical"
  },
  {
    title: "Ambient Study Music",
    description: "Soft ambient sounds perfect for long study sessions",
    duration: "3 hours",
    link: "https://www.youtube.com/watch?v=5qap5aO4i9A",
    type: "Ambient"
  },
  {
    title: "Lo-Fi Hip Hop Beats",
    description: "Relaxing lo-fi beats to keep you in the zone",
    duration: "24/7 Live",
    link: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
    type: "Lo-Fi"
  },
  {
    title: "Nature Sounds with Music",
    description: "Rain and forest sounds mixed with gentle melodies",
    duration: "1.5 hours",
    link: "https://www.youtube.com/watch?v=5BYfg65XDCM",
    type: "Nature"
  },
  {
    title: "Alpha Waves for Study",
    description: "8-14Hz alpha waves to promote relaxed focus state",
    duration: "1 hour",
    link: "https://www.youtube.com/watch?v=WPni755-Krg",
    type: "Alpha Waves"
  },
  {
    title: "Instrumental Focus Playlist",
    description: "Curated instrumental tracks for maximum productivity",
    duration: "2.5 hours",
    link: "https://www.youtube.com/watch?v=lTRiuFIWV54",
    type: "Instrumental"
  },
  {
    title: "Meditation Music for Study",
    description: "Calming meditation music to reduce stress while studying",
    duration: "1 hour",
    link: "https://www.youtube.com/watch?v=inpok4MKVLM",
    type: "Meditation"
  }
];

const SmartStudyPage = () => {
  return (
    <PageLayout title="Smart Study Tools & Resources">
      <div className="section-container space-y-8">
        
        {/* Books Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-8 w-8 text-nextstep-blue" />
            <h2 className="text-3xl font-bold text-nextstep-navy">Recommended Books</h2>
          </div>
          
          {Object.entries(examBooks).map(([exam, data]) => (
            <div key={exam} className="mb-8">
              <h3 className="text-2xl font-semibold text-nextstep-navy mb-4 flex items-center gap-2">
                {exam}
                <Badge variant="secondary" className="bg-nextstep-blue/10 text-nextstep-blue">
                  {Object.keys(data.subjects).length} Subjects
                </Badge>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(data.subjects).map(([subject, books]) => (
                  <Card key={subject} className="h-full">
                    <CardHeader>
                      <CardTitle className="text-lg text-nextstep-navy">{subject}</CardTitle>
                      <CardDescription>Essential books for {subject}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {books.map((book, index) => (
                        <div key={index} className="flex items-start justify-between gap-2">
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate" title={book.title}>
                              {book.title}
                            </p>
                          </div>
                          <Button
                            size="sm"
                            variant="outline"
                            className="shrink-0"
                            onClick={() => window.open(book.link, '_blank')}
                          >
                            <ExternalLink className="h-3 w-3" />
                          </Button>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Focused Music Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Music className="h-8 w-8 text-nextstep-purple" />
            <h2 className="text-3xl font-bold text-nextstep-navy">Focused Music</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {focusedMusic.map((music, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg text-nextstep-navy group-hover:text-nextstep-purple transition-colors">
                        {music.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {music.type}
                        </Badge>
                        <span className="text-xs text-gray-500">{music.duration}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-sm leading-relaxed">
                    {music.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-nextstep-purple hover:bg-nextstep-purple/90"
                    onClick={() => window.open(music.link, '_blank')}
                  >
                    <Music className="h-4 w-4 mr-2" />
                    Listen Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Study Tips */}
        <section className="bg-gradient-to-br from-nextstep-blue/5 to-nextstep-purple/5 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-nextstep-navy mb-4">Pro Study Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <h4 className="font-medium text-nextstep-navy mb-2">For Music Selection:</h4>
              <ul className="space-y-1">
                <li>• Use binaural beats for math and science</li>
                <li>• Choose classical music for reading comprehension</li>
                <li>• Try ambient sounds for creative subjects</li>
                <li>• Keep volume at 30-40% for optimal focus</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-nextstep-navy mb-2">For Book Selection:</h4>
              <ul className="space-y-1">
                <li>• Start with NCERT books as foundation</li>
                <li>• Use reference books for concept clarity</li>
                <li>• Practice with problem-solving books</li>
                <li>• Take notes while reading for better retention</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default SmartStudyPage;