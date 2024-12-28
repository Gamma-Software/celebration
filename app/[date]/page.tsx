import { Celebration } from "@/components/celebration-section";

import CelebrationSection from "@/components/celebration-section";
import TodayCelebrationLayout from "@/layouts/today-celebration-layout";

export default async function Page(props: { params: { date: string } }) {
  const { date } = props.params;
  const dateString = String(date);
  const dateLower = dateString.toLowerCase();
  const month = dateLower.match(/([a-z]+)/)?.[0];
  const day = dateLower.match(/(\d+)/)?.[0];

  const monthMap: {[key: string]: string} = {
    'january': '01',
    'february': '02',
    'march': '03',
    'april': '04',
    'may': '05',
    'june': '06',
    'july': '07',
    'august': '08',
    'september': '09',
    'october': '10',
    'november': '11',
    'december': '12'
  };
  const new_id = (monthMap[month] || '') + (day?.padStart(2, '0') || '');

  console.log(new_id);
  const celebrations = require("@/data/celebrations.json");
  const celebration = celebrations[new_id];
  if (!celebration) {
    return {
      notFound: true
    }
  }


//   const celebration: Celebration = {
//     date: "0101",
//     name: "Fête de Saint Albert le Grand",
//     description: "Célébration chrétienne honorant Saint Albert, théologien et philosophe médiéval.",
//     full_description: "La Fête de Saint Albert le Grand est une célébration chrétienne qui a lieu chaque année pour honorer la mémoire de Saint Albert, un théologien et philosophe médiéval d'une grande importance. Né vers 1206 en Allemagne, Albert le Grand, également connu sous le nom d'Albertus Magnus, a été un intellectuel prolifique qui a joué un rôle clé dans la synthèse de la pensée aristotélicienne avec la doctrine chrétienne.",
//     origin: "Donne la culture de la fête",
//     good_to_know: "Des activités communautaires, des conférences et des discussions sur ses œuvres peuvent également avoir lieu, permettant aux participants de mieux comprendre son impact sur la pensée chrétienne et la culture occidentale. La Fête de Saint Albert le Grand est ainsi une occasion de célébrer non seulement un saint, mais aussi l'esprit de curiosité intellectuelle et de dévotion qui l'animait.",
//     action: "Les fidèles sont encouragés à méditer sur l'importance de la foi et de la raison, deux éléments que Saint Albert a toujours cherché à harmoniser. En outre, cette journée est l'occasion de promouvoir l'éducation et la recherche, en s'inspirant de l'exemple de Saint Albert, qui a toujours valorisé la quête de la vérité et la compréhension du monde à travers la science et la philosophie.",
//   }
  return (
    <TodayCelebrationLayout>
      <CelebrationSection data={celebration} />
    </TodayCelebrationLayout>
  )
}
