import ChatbotUi from "./ChatbotUi";

export default function Page() {
  return (
    <div>
      <div className="bgs flex items-center justify-center min-h-screen mt-10">
        <h1 className="text-3xl font-bold text-sky-600 text-left mb-6">
          YOUR 24/7 AI SUPPORT ASSISTANT THAT HELPS YOU GROW YOUR BUSINESS.
        </h1>
      </div>

      <ChatbotUi />
    </div>
  );
}
