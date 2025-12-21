
import React, { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';

export default function StickyBottomBar() {
  const [question, setQuestion] = useState('');

  const handleSubmitQuestion = () => {
    if (question.trim()) {
      console.log('Question submitted:', question);
      // Add your question submission logic here
      setQuestion('');
    }
  };

  const handleScheduleDrive = () => {
    console.log('Schedule Drive clicked');
    // Add your schedule drive logic here
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmitQuestion();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-end">
      {/* Sticky Bottom Bar */}
      <div className="w-full bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex gap-4">
            {/* Ask Question Section */}
            <div className="flex-1 relative">
              <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-5 py-4 border-2 border-gray-200 hover:border-gray-300 transition-colors">
                <MessageCircle size={24} className="text-gray-600 flex-shrink-0" />
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="What's Dog Mode?"
                  className="flex-1 bg-transparent text-gray-900 placeholder-gray-400 outline-none text-lg"
                />
                {question.trim() && (
                  <>
                    <button
                      onClick={handleSubmitQuestion}
                      className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg transition-colors"
                      title="Send"
                    >
                      <Send size={20} />
                    </button>
                    <button
                      onClick={() => setQuestion('')}
                      className="bg-gray-300 hover:bg-gray-400 text-gray-700 p-2 rounded-lg transition-colors"
                      title="Clear"
                    >
                      <X size={20} />
                    </button>
                  </>
                )}
              </div>
              <div className="absolute left-5 -top-3 bg-white px-2">
                <span className="text-sm font-medium text-gray-700">Ask a Question</span>
              </div>
            </div>

            {/* Schedule Drive Button */}
            <button
              onClick={handleScheduleDrive}
              className="bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-gray-300 rounded-lg px-8 py-4 transition-colors flex items-center gap-3 min-w-fit"
            >
              <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                <circle cx="8" cy="10" r="1.5"/>
                <circle cx="16" cy="10" r="1.5"/>
                <path d="M12 17c2.21 0 4-1.79 4-4h-8c0 2.21 1.79 4 4 4z"/>
              </svg>
              <span className="text-lg font-medium text-gray-900">Schedule a Drive Today</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}