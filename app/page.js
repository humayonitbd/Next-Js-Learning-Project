// "use client";

import LearnCSSModule from "@/components/LearnCSSModule";
import LearnClientComponent from "@/components/LearnClientComponent";
import LearnDataFetching from "@/components/LearnDataFetching";
import LearnLink from "@/components/LearnLink";
import LearnServerComponent from "@/components/LearnServerComponent";
import LearnUseGlobalCss from "@/components/LearnUseGlobalCss";
import LearnUseImage from "@/components/LearnUseImage";
import LearnUseRouter from "@/components/LearnUseRouter";


export default function Home() {
 
  return (
    <main>
      <div className="mt-10">
       {/* <LearnLink /> */}
       {/* <LearnUseRouter /> */}
       {/* <LearnServerComponent /> */}
       {/* <LearnClientComponent /> */}
       {/* <LearnUseGlobalCss /> */}
        {/* <LearnCSSModule /> */}
        {/* <LearnUseImage /> */}
        <LearnDataFetching />
      </div>
    </main>
  );
}
