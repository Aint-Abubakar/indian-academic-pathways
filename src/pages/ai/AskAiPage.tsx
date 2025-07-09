
import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, Bot, User, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const AskAiPage = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const addMessage = (role: 'user' | 'assistant', content: string) => {
    const newMessage: Message = {
      id: Date.now(),
      role,
      content,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputMessage.trim()) {
      toast({
        variant: "destructive",
        title: "Empty Message",
        description: "Please enter a message to continue.",
      });
      return;
    }

    const userMessage = inputMessage.trim();
    setInputMessage("");
    addMessage('user', userMessage);
    setIsLoading(true);

    try {
      // Try OpenRouter API (more reliable alternative)
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer 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",
          "HTTP-Referer": window.location.origin,
          "X-Title": "NextStep Educational Platform",
        },
        body: JSON.stringify({
          model: "meta-llama/llama-3.1-8b-instruct:free",
          messages: [
            {
              role: "system",
              content: "You are a helpful AI assistant for NextStep educational platform. Provide clear, informative responses about education, careers, courses, colleges, and learning resources. Keep answers focused on educational content."
            },
            {
              role: "user",
              content: userMessage
            }
          ],
          max_tokens: 1000,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = data.choices[0]?.message?.content || "I apologize, but I couldn't generate a response. Please try again.";
      
      addMessage('assistant', aiResponse);
    } catch (error) {
      console.error("Error fetching from AI API:", error);
      
      // Fallback response for educational queries
      const fallbackResponse = getFallbackResponse(userMessage);
      addMessage('assistant', fallbackResponse);
      
      toast({
        variant: "destructive",
        title: "Connection Issue",
        description: "Using offline mode. Connect to internet for full AI capabilities.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getFallbackResponse = (question: string) => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('career') || lowerQuestion.includes('job')) {
      return "For career guidance, I recommend exploring our Career Paths section where you can find detailed information about various fields like Science, Commerce, and Arts. Consider your interests, skills, and market demand when choosing a career path.";
    }
    
    if (lowerQuestion.includes('college') || lowerQuestion.includes('university')) {
      return "To find the right college, consider factors like course offerings, faculty quality, placement records, and location. Check our Colleges section for detailed information about institutions across different states.";
    }
    
    if (lowerQuestion.includes('course') || lowerQuestion.includes('study')) {
      return "We offer information about various courses and free learning resources. Visit our Free Courses section to explore available options. Choose courses that align with your career goals and interests.";
    }
    
    return "Thank you for your question! While I'm currently in offline mode, I'd recommend exploring our platform sections: Careers, Colleges, Free Courses, and Study Abroad for comprehensive educational guidance.";
  };

  return (
    <PageLayout title="AI Assistant">
      <div className="max-w-4xl mx-auto h-[calc(100vh-200px)] flex flex-col">
        {/* Chat Header */}
        <div className="bg-gradient-to-r from-nextstep-blue to-nextstep-indigo text-white p-4 rounded-t-lg">
          <div className="flex items-center gap-3">
            <Bot className="h-8 w-8" />
            <div>
              <h2 className="text-xl font-semibold">NextStep AI Assistant</h2>
              <p className="text-blue-100 text-sm">Your educational guidance companion</p>
            </div>
          </div>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4 space-y-4">
          {messages.length === 0 && (
            <div className="text-center py-12">
              <Bot className="h-16 w-16 text-nextstep-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Welcome to NextStep AI</h3>
              <p className="text-gray-600 mb-6">Ask me anything about education, careers, courses, or colleges!</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h4 className="font-semibold text-nextstep-blue mb-2">Career Guidance</h4>
                  <p className="text-sm text-gray-600">"What career should I choose after 12th science?"</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h4 className="font-semibold text-nextstep-purple mb-2">College Selection</h4>
                  <p className="text-sm text-gray-600">"Which engineering colleges are best in Delhi?"</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h4 className="font-semibold text-nextstep-teal mb-2">Course Information</h4>
                  <p className="text-sm text-gray-600">"What are the best free programming courses?"</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <h4 className="font-semibold text-nextstep-orange mb-2">Study Abroad</h4>
                  <p className="text-sm text-gray-600">"How can I study in Canada after graduation?"</p>
                </div>
              </div>
            </div>
          )}

          {messages.map((message) => (
            <div key={message.id} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex gap-3 max-w-[80%] ${message.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.role === 'user' 
                    ? 'bg-nextstep-blue text-white' 
                    : 'bg-white border-2 border-nextstep-blue text-nextstep-blue'
                }`}>
                  {message.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>
                <div className={`rounded-2xl px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-nextstep-blue text-white rounded-tr-md'
                    : 'bg-white border border-gray-200 rounded-tl-md'
                }`}>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  <div className={`text-xs mt-2 ${
                    message.role === 'user' ? 'text-blue-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-full bg-white border-2 border-nextstep-blue text-nextstep-blue flex items-center justify-center flex-shrink-0">
                <Bot size={16} />
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-md px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-nextstep-blue rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-nextstep-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-nextstep-blue rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span className="text-sm text-gray-600">AI is thinking...</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 p-4">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <div className="flex-1 relative">
              <Textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask about careers, colleges, courses, or any educational guidance..."
                className="min-h-[50px] max-h-[120px] resize-none pr-12 rounded-xl border-gray-300 focus:border-nextstep-blue focus:ring-nextstep-blue"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading || !inputMessage.trim()}
              className="bg-nextstep-blue hover:bg-nextstep-blue/90 h-12 w-12 rounded-xl flex-shrink-0"
            >
              <Send size={18} />
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Press Enter to send, Shift+Enter for new line
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default AskAiPage;
