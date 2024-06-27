import React from "react";
import TicketCard from "./(components)/TicketCard";
import Root from "./(root)/page";

export const getTickets = async () => {
  try {
    const res = await fetch(`${process.env.DOMAIN}/api/Tickets/`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};
const Dashboard = async () => {
  const data = await getTickets();
  return <Root />;
};

export default Dashboard;
