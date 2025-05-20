"use client"
import { redirect } from "next/navigation"
const arr = [
    {
      id: "g1",
      name: "Gaming Nexus",
      description: "Next-level gaming community",
      members: 15432,
      activity: 92,
      icon: "https://icons.iconarchive.com/icons/iconarchive/red-orb-alphabet/128/Letter-G-icon.png"
    },
    {
      id: "g2",
      name: "Code Masters",
      description: "Programming & development hub",
      members: 8732,
      activity: 85,
      icon: "https://icons.iconarchive.com/icons/dakirby309/simply-styled/128/Code-icon.png"
    },
    {
      id: "g3",
      name: "Artisan's Corner",
      description: "Digital art showcase",
      members: 6210,
      activity: 78,
      icon: "https://icons.iconarchive.com/icons/designbolts/free-multimedia/128/Art-icon.png"
    },
    {
      id: "g4",
      name: "Music Universe",
      description: "All genres, all vibes",
      members: 11245,
      activity: 88,
      icon: "https://icons.iconarchive.com/icons/designbolts/free-multimedia/128/Music-icon.png"
    },
    {
      id: "g5",
      name: "Anime World",
      description: "Weebs unite!",
      members: 18765,
      activity: 95,
      icon: "https://icons.iconarchive.com/icons/marcus-roberto/google-play/128/Anime-icon.png"
    },
    {
      id: "g6",
      name: "Crypto Traders",
      description: "Blockchain & trading",
      members: 9321,
      activity: 82,
      icon: "https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/128/Bitcoin-BTC-icon.png"
    },
    {
      id: "g7",
      name: "Fitness Club",
      description: "Get fit together",
      members: 5432,
      activity: 65,
      icon: "https://icons.iconarchive.com/icons/graphicloads/100-flat/128/fitness-icon.png"
    },
    {
      id: "g8",
      name: "Book Haven",
      description: "Literary discussions",
      members: 3876,
      activity: 58,
      icon: "https://icons.iconarchive.com/icons/designbolts/free-multimedia/128/Book-icon.png"
    },
    {
      id: "g9",
      name: "Film Buffs",
      description: "Movie enthusiasts",
      members: 7654,
      activity: 72,
      icon: "https://icons.iconarchive.com/icons/designbolts/free-multimedia/128/Movie-icon.png"
    },
    {
      id: "g10",
      name: "Food Lovers",
      description: "Culinary adventures",
      members: 6543,
      activity: 68,
      icon: "https://icons.iconarchive.com/icons/graphicloads/100-flat/128/food-icon.png"
    },
    {
      id: "g11",
      name: "Tech News",
      description: "Latest in technology",
      members: 9876,
      activity: 81,
      icon: "https://icons.iconarchive.com/icons/dtafalonso/android-l/128/Tech-News-icon.png"
    },
    {
      id: "g12",
      name: "Photography Pro",
      description: "Shoot and share",
      members: 5432,
      activity: 63,
      icon: "https://icons.iconarchive.com/icons/graphicloads/100-flat/128/camera-icon.png"
    },
    {
      id: "g13",
      name: "Travel Buddies",
      description: "Global explorers",
      members: 4321,
      activity: 59,
      icon: "https://icons.iconarchive.com/icons/graphicloads/100-flat/128/travel-icon.png"
    },
    {
      id: "g14",
      name: "Science Lab",
      description: "STEM discussions",
      members: 6789,
      activity: 71,
      icon: "https://icons.iconarchive.com/icons/graphicloads/100-flat/128/science-icon.png"
    },
    {
      id: "g15",
      name: "Fashion Forward",
      description: "Style trends",
      members: 5678,
      activity: 67,
      icon: "https://icons.iconarchive.com/icons/graphicloads/100-flat/128/fashion-icon.png"
    },
    {
      id: "g16",
      name: "Mental Health",
      description: "Support community",
      members: 3456,
      activity: 52,
      icon: "https://icons.iconarchive.com/icons/graphicloads/100-flat/128/health-icon.png"
    },
    {
      id: "g17",
      name: "Business Network",
      description: "Entrepreneurs unite",
      members: 7890,
      activity: 76,
      icon: "https://icons.iconarchive.com/icons/graphicloads/100-flat/128/business-icon.png"
    },
    {
      id: "g18",
      name: "Language Exchange",
      description: "Learn languages",
      members: 4567,
      activity: 64,
      icon: "https://icons.iconarchive.com/icons/graphicloads/100-flat/128/language-icon.png"
    },
    {
      id: "g19",
      name: "Sports Arena",
      description: "All things sports",
      members: 8765,
      activity: 79,
      icon: "https://icons.iconarchive.com/icons/graphicloads/100-flat/128/sport-icon.png"
    },
    {
      id: "g20",
      name: "DIY Creators",
      description: "Build and create",
      members: 3210,
      activity: 61,
      icon: "https://icons.iconarchive.com/icons/graphicloads/100-flat/128/diy-icon.png"
    }
  ];

export default function GroupsList(){
    return (  <div className="grid grid-cols-3 gap-2 p-2">
    {arr.map((i) => {
        return (
            <div key={i.id}>
  <button onClick={() => redirect(`/home/groups/${i.id}`)} className="container-item">
  <img className="absolute bottom-1/2" src={i.icon}></img>
<div className="absolute left-0/0 top-1/2">
<h1 className="text-xl">{i.name}</h1>
<p >{i.description}</p>
<p>Members: {i.members}</p>
<p>Activity: {i.activity}</p>
</div>
  </button>
  </div>
        )
    })
}
  </div>)
}
