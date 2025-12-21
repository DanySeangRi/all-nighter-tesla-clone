import React, { useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { TbSteeringWheelFilled } from "react-icons/tb";
import { RiMessage2Fill } from "react-icons/ri";
import { FaArrowUpLong } from "react-icons/fa6";
export default function StickyBottomBar() {
  const [question, setQuestion] = useState("");
  const showScheduleDrive = true;
  const handleSubmitQuestion = () => {
    if (question.trim()) {
      console.log("Question submitted:", question);
      // Add your question submission logic here
      setQuestion("");
    }
  };

  const handleScheduleDrive = () => {
    console.log("Schedule Drive clicked");
    // Add your schedule drive logic here
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmitQuestion();
    }
  };

  return (
    <div className=" bg-gray-50 flex items-end  ">
      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg border border-gray-200 z-50 py-2.5 px-6">
        <div className=" flex justify-center items-center  ">
          <div className="flex gap-1 lg:gap-2">
            {/* Ask Question Section */}
            <div className=" ">
              <div className=" w-12 flex items-center justify-center gap-3  bg-gray-100 rounded-lg lg:w-135 p-1 h-10 border border-gray-200 hover:border-gray-300 transition-colors ">
                <RiMessage2Fill size={24}  className="text-gray-600 shrink-0 md:size-6 " />
               <div className="hidden lg:flex">
                 <div className=" flex  px-2 items-center">
                  <span className="text-sm font-medium text-gray-700 ">
                    Ask a Question
                  </span>
                </div >
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="What's Dog Mode?"
                  className="bg-transparent text-gray-900 placeholder-gray-400 outline-none w-[320px]  text-[14px] "
                />

              
                  <>
                    <button
                      onClick={handleSubmitQuestion}
                      disabled={!question.trim()}
                      className={` p-1 transition-colors rounded-lg
                        ${
                          question.trim()
                            ? "bg-blue-600 hover:bg-blue-700 text-white"
                            : "bg-gray-300 text-gray-400 cursor-not-allowed"
                        }
                      `}
                      title="Send"
                    >
                      <FaArrowUpLong size={18} className="text-white" />
                    </button>
                  </>
                
               </div>
               
              </div>
            </div>

            {/* Schedule Drive Button */}
         {showScheduleDrive && (
             <button
              onClick={handleScheduleDrive}
              className="bg-white hover:bg-gray-50 border  border-gray-200 hover:border-gray-300 rounded-lg px-6 py-1 transition-colors flex items-center gap-3 min-w-fit"
            >
              <TbSteeringWheelFilled size={24} className="text-blue-600" />
              <span className="text-[14px] font-medium text-gray-900">
                Schedule a Drive Today
              </span>
            </button>
         )}
          </div>
        </div>
      </div>
    </div>
  );
}
