import { getAllPosts } from "@/lib/markdown";
import HomeClient from "@/components/HomeClient";

export default function Home() {
  // Récupérer les 3 articles les plus récents côté serveur
  const posts = getAllPosts().slice(0, 3);

  // Passer les données au composant client
  return <HomeClient posts={posts} />;
}
