// "use client";

import LearnClientComponent from "@/components/LearnClientComponent";
import LearnLink from "@/components/LearnLink";
import LearnServerComponent from "@/components/LearnServerComponent";
import LearnUseGlobalCss from "@/components/LearnUseGlobalCss";
import LearnUseRouter from "@/components/LearnUseRouter";


export default function Home() {
 
  return (
    <main>
      <div className="mt-10">
       {/* <LearnLink /> */}
       {/* <LearnUseRouter /> */}
       {/* <LearnServerComponent /> */}
       {/* <LearnClientComponent /> */}
       <LearnUseGlobalCss />
        
      </div>
    </main>
  );
}
