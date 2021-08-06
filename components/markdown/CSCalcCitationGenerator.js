import { useState, useEffect } from "react";

export default function CSCalcCitationGenerator() {
  const [citation, setCitation] = useState("Citation will appear here");
  const [published, setPublished] = useState(null);
  const [updated, setUpdated] = useState(null);
  const [citationType, setCitationType] = useState(null);
  const version = "2.0.0";
  const today = new Date();

  useEffect(async () => {
    async () => {
      const res = await fetch(
        `https://api.github.com/repos/Light-and-Health-Research-Center/cscalc`
      );
      if (!res.ok) return;
      const json = await res.json();
      setUpdated(new Date(json.updated_at));
      setPublished(new Date(json.created_at));
    }
  }, []);

  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // M D, Y
  const getFormattedDate = (date) => {
    return `${
      months[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  const getAnnotated = () => {
    setCitationType("Annotated");
    setCitation(
      `Light and Health Research Center (${
        published && published.getFullYear()
      }, ${
        updated && getFormattedDate(updated)
      }). "CS Calculator (2.0)." Version ${version}. Retrieved ${getFormattedDate(
        today
      )}, from https://cscalc.light-health.org.`
    );
  };

  const getJAMA = () => {
    setCitationType("JAMA");
    setCitation(
      `Light and Health Research Center. CS Calculator (2.0). Icahn School of Medicine at Mount Sinai. https://cscalc.light-health.org. Published ${
        published && published.getFullYear()
      }. Updated ${
        updated && getFormattedDate(updated)
      }. Accessed ${getFormattedDate(today)}.`
    );
  };

  const getNature = () => {
    setCitationType("Nature");
    setCitation(
      `Light and Health Research Center. CS Calculator (2.0), <https://cscalc.light-health.org> (${
        published && published.getFullYear()
      }).`
    );
  };

  const getSage = () => {
    setCitationType("Sage Vancouver");
    setCitation(
      `Light and Health Research Center. CS Calculator (2.0), https://cscalc.light-health.org (${
        published && published.getFullYear()
      }, accessed ${getFormattedDate(today)}).`
    );
  };

  return (
    <div className="border rounded-md p-4">
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => {
            getAnnotated();
          }}
          className="citation-generator-button"
        >
          Annotated
        </button>
        <button
          onClick={() => {
            getJAMA();
          }}
          className="citation-generator-button"
        >
          JAMA
        </button>
        <button
          onClick={() => {
            getNature();
          }}
          className="citation-generator-button"
        >
          Nature
        </button>
        <button
          onClick={() => {
            getSage();
          }}
          className="citation-generator-button"
        >
          Sage Vancouver
        </button>
      </div>

      <div>
        <p className="font-bold">
          Citation{citationType && ` (${citationType})`}:
        </p>
        <p>{citation}</p>
      </div>
    </div>
  );
}
