"use client";
import React, { useEffect, useState } from "react";
import TicketCard from "../(components)/TicketCard";
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

function Root() {
  async function fetchData() {
    const newData = await getTickets();
    setData(newData);
  }
  const [data, setData] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  if (!data?.tickets) {
    return <p>No tickets.</p>;
  }
  const tickets = data.tickets;
  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  .filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Root;
