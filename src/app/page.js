
// import { Button } from "@heroui/react";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
//       <h1 className="text-3xl font-bold">Nexus Ideas Client</h1>
//       
//       <Button color="primary">
//         HeroUI Button
//       </Button>
//     </main>
//   );
// }
import Banner from "@/components/Banner";
import CommunityHighlights from "@/components/CommunityHighlights";
import IdeaSubmissionCTA from "@/components/IdeaSubmissionCTA";
import TrendingIdeas from "@/components/TrendingIdeas";

export default function Home() {
  return (
    <main className="min-h-screen">
      
      <Banner />

      
      {/* <section className="py-12 px-4 md:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          Welcome to NexusIdeas
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Innovation begins with a single idea. Share yours today.
        </p>
      </section> */}

      <TrendingIdeas />

      <CommunityHighlights />

      <IdeaSubmissionCTA />


    </main>
  );
}