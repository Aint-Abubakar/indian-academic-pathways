
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Bot, Bot as BotIcon, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Your Qwen 3 API key - Replace this with your actual API key
const QWEN_API_KEY = "sk-or-v1-your-qwen-api-key-here";

const AskAiPage = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!question.trim()) {
      toast({
        variant: "destructive",
        title: "Empty Question",
        description: "Please enter a question to continue.",
      });
      return;
    }

    setIsLoading(true);
    setAnswer("");

    try {
      const response = await fetch("https://api.qwen.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${QWEN_API_KEY}`,
        },
        body: JSON.stringify({
          model: "qwen3-72b-max",
          messages: [
            {
              role: "system",
              content: "You are a helpful AI assistant for NextStep educational platform. Provide clear, informative responses about education, careers, courses, colleges, and learning resources. Keep answers focused on educational content."
            },
            {
              role: "user",
              content: question
            }
          ],
          max_tokens: 1000,
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error?.message || "Failed to get response from AI");
      }

      setAnswer(data.choices[0]?.message?.content || "No response received.");
    } catch (error) {
      console.error("Error fetching from Qwen API:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to get response from AI",
      });
      setAnswer("Sorry, there was an error processing your request. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageLayout title="Ask AI Assistant">
      <div className="container max-w-4xl mx-auto pb-10">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BotIcon className="h-6 w-6 text-nextstep-blue" />
              <span>AI Assistant</span>
            </CardTitle>
            <CardDescription>
              Ask any education or career related questions and get AI-powered answers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Textarea
                  id="question"
                  placeholder="e.g., What should I study to become a data scientist?"
                  className="min-h-[100px]"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </div>
              <Button 
                type="submit" 
                disabled={isLoading}
                className="bg-nextstep-blue hover:bg-nextstep-blue/90 w-full"
              >
                {isLoading ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Get AI Answer
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        {answer && (
          <Card>
            <CardHeader>
              <CardTitle className="text-nextstep-blue">AI Response</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                {answer.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground">
              Powered by Qwen 3 AI
            </CardFooter>
          </Card>
        )}
      </div>
    </PageLayout>
  );
};

export default AskAiPage;
