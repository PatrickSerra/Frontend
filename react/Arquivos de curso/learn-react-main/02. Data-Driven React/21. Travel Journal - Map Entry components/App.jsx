import Header from "./components/Header";
import Entry from "./components/Entry";
import data from "./data.js";

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function App() {
  let entriesArray = data.map(
    ({ img, title, country, googleMapsLink, dates, text }) => {
      return (
        <Entry
          img={{ src: img.src, alt: img.alt }}
          title={title}
          country={country}
          googleMapsLink={googleMapsLink}
          dates={dates}
          text={text}
        />
      );
    }
  );
  return (
    <>
      <Header />
      <main className="container">{entriesArray}</main>
    </>
  );
}
