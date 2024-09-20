import { useEffect, useState } from "react";
import { fetchEvents } from "../../services/app";
import Event from "./Event";
// import { useInView } from "react-intersection-observer";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const [totalPages, setTotalPages] = useState(0);
  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0,
  // });

  useEffect(() => {
    const getEvents = async () => {
      try {
        const { events, totalPages, currentPage } = await fetchEvents({
          page,
          limit,
        });
        setEvents(events);
        // setEvents((prev) => [...prev, ...events]);
        setPage(currentPage);
        setTotalPages(totalPages);
      } catch (error) {}
    };

    getEvents();
  }, [page, limit]);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <>
      <h1 style={{ paddingLeft: "60px" }}>Events</h1>
      {events.length > 0 ? (
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "30px",
            padding: "20px",
          }}
        >
          {events.map((event) => (
            <Event key={event._id} event={event} />
          ))}
        </ul>
      ) : (
        <p>No events found</p>
      )}

      <div style={{ padding: "20px", textAlign: "center" }}>
        <div>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              style={{
                margin: "0 5px",
                fontWeight: page === index + 1 ? "bold" : "normal",
              }}
              disabled={page === index + 1}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      {/* <div ref={ref}>End</div> */}
    </>
  );
};

export default EventsPage;
