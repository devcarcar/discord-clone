"use client"

import { redirect } from "next/navigation"


export default function GroupsButton() {
    return (
        <button onClick={() => redirect("/home/groups")}>
        Groups
     </button> 
    )
}