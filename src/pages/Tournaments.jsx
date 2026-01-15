import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Calendar, Trophy, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Tournaments = () => {
  const { toast } = useToast();
  const [showMoreYears, setShowMoreYears] = useState({});

  // --- Upcoming Tournaments ---
  const upcomingTournaments = [
    {
      id: 1,
      name: "1st Kangra International Open FIDE Rated Rapid Chess Tournament 2026",
      date: "Jan 03-04, 2026",
      time: "09:00 AM (Tentative)",
      location: "Hotel Sagar & Palace, Ghurkari, Kangra (HP)",
      participants: "300+ players expected",
      link: "https://kangrachessclub.synergyayush.com/register",
    },
  ];

  // --- Past Tournaments ---
 const pastTournaments = [
    { year: "2025", title: "Kangra Rapid U-15 BOYS Chess Championship", from: "20250608", to: "20250608", prize: "₹45,000", contact: "Deepak Chugh 7018653816", link: "https://s1.chess-results.com/tnr1194803.aspx?lan=1" },
    { year: "2025", title: "Kangra Rapid U-15 GIRLS Chess Championship", from: "20250608", to: "20250608", contact: "Kangra Chess Club", link: "https://s1.chess-results.com/tnr1194801.aspx?lan=1" },
    { year: "2025", title: "Kangra Rapid Open Chess Championship", from: "20250608", to: "20250608", prize: "₹45,000", contact: "Deepak Chugh 7018653816", link: "https://s1.chess-results.com/tnr1194804.aspx?lan=1" },
    { year: "2025", title: "Baishakhi festival Kangra Rapid Open Chess Championship", from: "20250406", to: "20250406", prize: "₹23,300", contact: "Deepak Chugh 7018653816", link: "https://s1.chess-results.com/tnr1150268.aspx?lan=1" },
    { year: "2025", title: "Baishakhi festival Kangra Rapid Chess Championship U15 BOYS", from: "20250406", to: "20250406", prize: "₹23,300", contact: "Deepak Chugh 7018653816", link: "https://s1.chess-results.com/tnr1146135.aspx?lan=1" },
    { year: "2025", title: "Baishakhi festival Kangra Rapid Chess Championship U15 GIRLS", from: "20250406", to: "20250406", prize: "₹23,300", contact: "Deepak Chugh 7018653816", link: "https://s1.chess-results.com/tnr1149328.aspx?lan=1" },
    { year: "2025", title: "All India Kangra Open Chess Championship Open List", from: "20250111", to: "20250112", prize: "₹201,000", link: "https://s1.chess-results.com/tnr1097842.aspx?lan=1" },
    { year: "2025", title: "All India Kangra Open Chess Championship U-15 Girls", from: "20250111", to: "20250112", link: "https://s1.chess-results.com/tnr1097844.aspx?lan=1" },
    { year: "2025", title: "All India Kangra Open Chess Championship U-15 BOYS", from: "20250111", to: "20250112", prize: "₹201,000", link: "https://s1.chess-results.com/tnr1097843.aspx?lan=1" },

    { year: "2024", title: "Kangra Chess Club Open Rapid Chess Championship", from: "20240825", to: "20240825", link: "https://s1.chess-results.com/tnr988018.aspx?lan=1" },
    { year: "2024", title: "Kangra Chess Club U15 Boys Rapid Chess Championship", from: "20240825", to: "20240825", link: "https://s1.chess-results.com/tnr988015.aspx?lan=1" },
    { year: "2024", title: "Kangra Chess Club U15 Girls Rapid Chess Championship", from: "20240825", to: "20240825", prize: "₹31,000", contact: "7018653816", link: "https://s1.chess-results.com/tnr992894.aspx?lan=1" },
    { year: "2024", title: "HP State U-17 Girls Chess Championship", from: "20240608", to: "20240609", link: "https://s1.chess-results.com/tnr952721.aspx?lan=1" },
    { year: "2024", title: "HP State U-17 Open Chess Championship", from: "20240608", to: "20240609", link: "https://s1.chess-results.com/tnr950013.aspx?lan=1" },
    { year: "2024", title: "District Kangra U-19 Boys Chess Championship", from: "20240523", to: "20240523", link: "http://s1.chess-results.com/tnr940126.aspx?lan=1" },
    { year: "2024", title: "School District Kangra U-19 Girls Chess Championship", from: "20240523", to: "20240523", link: "https://s1.chess-results.com/tnr940127.aspx?lan=1https://s1.chess-results.com/tnr940127.aspx?lan=1" },
    { year: "2024", title: "School District Kangra U-14 Boys Chess Championship", from: "20240523", to: "20240523", link: "https://s1.chess-results.com/tnr940129.aspx?lan=1" },
    { year: "2024", title: "School District Kangra U-14 Girls Chess Championship", from: "20240523", to: "20240523", link: "https://s1.chess-results.com/tnr940128.aspx?lan=1" },

    { year: "2023", title: "2nd U-15 Girls Independence Day Chess Championship", from: "20230812", to: "20230813", link: "https://s1.chess-results.com/tnr802269.aspx?lan=1" },
    { year: "2023", title: "2nd U-15 Boys Independence Day Chess Championship", from: "20230812", to: "20230813", link: "https://s1.chess-results.com/tnr802268.aspx?lan=1" },
    { year: "2023", title: "2nd Independence Day Open Chess Championship", from: "20230812", to: "20230813", link: "https://s1.chess-results.com/tnr802266.aspx?lan=1" },
    { year: "2023", title: "Open Rapid Chess Championship", from: "20230521", to: "20230521", link: "https://s1.chess-results.com/tnr770569.aspx?lan=1" },
    { year: "2023", title: "U-15 Girls Rapid Chess Championship", from: "20230521", to: "20230521", link: "https://s1.chess-results.com/tnr770536.aspx?lan=1" },
    { year: "2023", title: "U-15 Boys Rapid Chess Championship", from: "20230521", to: "20230521", link: "https://s1.chess-results.com/tnr770538.aspx?lan=1" },

    { year: "2022", title: "6th Kangra U-15 Girls Chess Championship", from: "20221224", to: "20221225", link: "https://s1.chess-results.com/tnr709407.aspx?lan=1" },
    { year: "2022", title: "6th Kangra Open Chess Championship", from: "20221224", to: "20221225", link: "https://s1.chess-results.com/tnr709405.aspx?lan=1" },
    { year: "2022", title: "6th Kangra U-15 Boys Chess Championship", from: "20221224", to: "20221225", link: "https://s1.chess-results.com/tnr709408.aspx?lan=1" },
    { year: "2022", title: "Azadi Ka Amrit Mahotsav U-15 Boys Chess Championship", from: "20220814", to: "20220815", link: "https://s1.chess-results.com/tnr665230.aspx?lan=1" },
    { year: "2022", title: "Azadi Ka Amrit Mahotsav U-15 Girls Chess Championship", from: "20220814", to: "20220815", link: "https://s1.chess-results.com/tnr665255.aspx?lan=1" },
    { year: "2022", title: "Azadi Ka Amrit Mahotsav Open Chess Championship", from: "20220814", to: "20220815", link: "https://s1.chess-results.com/tnr663167.aspx?lan=1" },
    { year: "2022", title: "U-15 Rapid Chess Championship, Kangra Chess Club", from: "20220623", to: "20220623", link: "https://s1.chess-results.com/tnr650992.aspx?lan=1" },
    { year: "2022", title: "Rapid Chess Championship, Kangra Chess Club", from: "20220626", to: "20220626", link: "https://s1.chess-results.com/tnr652024.aspx?lan=1" },

    { year: "2021", title: "5th Kangra U-15 Girls Chess Championship", from: "20211225", to: "20211226", link: "https://s1.chess-results.com/tnr600968.aspx?lan=1" },
    { year: "2021", title: "5th Kangra Open Chess Championship", from: "20211225", to: "20211226", link: "https://s1.chess-results.com/tnr600969.aspx?lan=1" },
    { year: "2021", title: "5th Kangra U-15 Chess Championship", from: "20211225", to: "20211226", link: "https://s1.chess-results.com/tnr600967.aspx?lan=1" },
    { year: "2021", title: "4th Kangra Open Chess Championship", from: "20210124", to: "20210125", link: "https://s1.chess-results.com/tnr546851.aspx?lan=1" },
    { year: "2021", title: "4th Kangra U-15 Chess Championship", from: "20210124", to: "20210125", link: "https://s1.chess-results.com/tnr547244.aspx?lan=1" },

    { year: "2020", title: "3rd Kangra Open Chess Tournament", from: "20200125", to: "20200126", link: "https://s1.chess-results.com/tnr505257.aspx?lan=1" },
  ];
  // --- Group by Year ---
  const groupedTournaments = pastTournaments.reduce((acc, t) => {
    if (!acc[t.year]) acc[t.year] = [];
    acc[t.year].push(t);
    return acc;
  }, {});

  const formatDate = (yyyymmdd) => {
    const d = new Date(
      parseInt(yyyymmdd.substring(0, 4)),
      parseInt(yyyymmdd.substring(4, 6)) - 1,
      parseInt(yyyymmdd.substring(6, 8))
    );
    return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  };

const handleRegister = (name) => {
  // Open the Google Form in a new tab
  window.open("https://forms.gle/wXyT2AxgL4tLHqwr6", "_blank");

  toast({
    title: "✅ Registration Form Opened",
    description: `You can now register for "${name}" using the Google Form.`,
  });
};

const handleDetails = (name) => {
  // Trigger PDF download from public folder
  const link = document.createElement("a");
  link.href = "/club1.pdf";
  link.download = "club1.pdf";
  link.click();

  toast({
    title: "📘 Brochure Download Started",
    description: `The brochure for "${name}" has started downloading.`,
  });
};


  const handleViewResults = (link) => {
    if (link) window.open(link, "_blank");
    else
      toast({
        title: "No Link Yet",
        description: "Results link will be added soon.",
      });
  };

  return (
    <>
      <Helmet>
        <title>Tournaments | Kangra Chess Club</title>
      </Helmet>

      <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Upcoming Tournaments */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-12 text-gray-800"
          >
            🏆 Upcoming <span className="text-blue-600">Tournaments</span>
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingTournaments.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg border border-gray-100 transition-all"
              >
                <h2 className="text-2xl font-semibold text-red-800 mb-3 flex items-center gap-2">
                  <Trophy className="text-yellow-500" size={300} /> {t.name}
                </h2>
                <p className="text-gray-600">
                  <Calendar size={18} /> {t.date} | {t.time}
                </p>
                <p className="text-gray-600">
                  <strong>Venue:</strong> {t.location}
                </p>
                <p className="text-gray-600">
                  <strong>Participants:</strong> {t.participants}
                </p>
                <div className="flex gap-3 mt-4">
                  <Button
                    onClick={() => handleRegister(t.name)}
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Register
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleDetails(t.name)}
                    className="flex items-center gap-2"
                  >
                    <ExternalLink size={18} /> Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Past Tournaments */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20"
          >
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              🕑 Past <span className="text-blue-600">Tournaments</span>
            </h2>

            {Object.keys(groupedTournaments)
              .sort((a, b) => b - a)
              .map((year) => (
                <div key={year} className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-700 border-b border-gray-200 pb-2">
                    {year}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {groupedTournaments[year]
                      .slice(
                        0,
                        showMoreYears[year]
                          ? groupedTournaments[year].length
                          : 6
                      )
                      .map((t, i) => (
                        <motion.div
                          key={i}
                          className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
                        >
                          <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                            <Trophy className="text-yellow-500" /> {t.title}
                          </h4>
                          <p className="text-gray-600">
                            <strong>Date:</strong> {formatDate(t.from)}
                            {t.from !== t.to
                              ? ` - ${formatDate(t.to)}`
                              : ""}
                          </p>
                          {t.prize && (
                            <p className="text-gray-600">
                              <strong>Prize:</strong> {t.prize}
                            </p>
                          )}
                          {t.contact && (
                            <p className="text-gray-600">
                              <strong>Contact:</strong> {t.contact}
                            </p>
                          )}
                          {t.link && (
                            <Button
                              onClick={() => handleViewResults(t.link)}
                              className="mt-3 bg-green-600 hover:bg-green-700 text-white"
                            >
                              View
                            </Button>
                          )}
                        </motion.div>
                      ))}
                  </div>
                  {groupedTournaments[year].length > 6 && (
                    <div className="flex justify-center mt-4">
                      <Button
                        onClick={() =>
                          setShowMoreYears({
                            ...showMoreYears,
                            [year]: !showMoreYears[year],
                          })
                        }
                      >
                        {showMoreYears[year] ? "Show Less" : "Show More"}
                      </Button>
                    </div>
                  )}
                </div>
              ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Tournaments;
