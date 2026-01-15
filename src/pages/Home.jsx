
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Trophy, Users, Calendar, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Home = () => {
  const stats = [
    { icon: Users, label: 'Active Members', value: '150+' },
    { icon: Trophy, label: 'Tournaments ', value: '25+' },
    { icon: Calendar, label: 'Years Active', value: '8+' },
    { icon: Star, label: 'FIDE Rated Players', value: '30+' },
    { icon: Users, label: 'Senior National Arbitors', value: '5+' },
    { icon: Users, label: 'Coaches', value: '3+' },
  ];

  const upcomingEvents = [
    {
      title: '1st kangra International Open FIDE Rated Rapid Chess tournament 2026',
      prize: '2,50,000 INR',
      date: 'Jan 03-04, 2026',
      venue: 'Hotal Sagar & Palace Ghurkari Kangra HP',
      type: 'Championship'
      
    },
  
  ];

  return (
    <>
      <Helmet>
        <title>Kangra Chess Club - Home</title>
        <meta name="description" content="Welcome to Kangra Chess Club - promoting chess excellence in Kangra region with tournaments, training, and community events." />
      </Helmet>

      {/* Hero Section */}
<section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
  <div className="chess-pattern absolute inset-0 opacity-10"></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white"
      >
        <h1 className="text-5xl lg:text-6xl font-bold mb-6">
          Welcome to <span className="text-yellow-400">Kangra Chess Club</span>
        </h1>
        <p className="text-xl mb-8 text-gray-200">
          Master the royal game with Kangra's premier chess community. Join us for tournaments, training, and chess excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            <Link to="/contact">Join Our Club</Link>
          </Button>
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
            <Link to="/tournaments">View Tournaments</Link>
          </Button>
        </div>
      </motion.div>

      {/* Right Section - Two Equal Stacked Images */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative flex flex-col items-center space-y-6"
      >
        <img
          src="11.jpg"
          alt="Chess players in action at Kangra Chess Club"
          className="rounded-lg shadow-2xl w-full h-[300px] object-cover transform -translate-y-4"
        />
        <img
          src="m2.jpg"
          alt="Chess event at Kangra Chess Club"
          className="rounded-lg shadow-2xl w-full h-[300px] object-cover"
        />
      </motion.div>
    </div>
  </div>
</section>




      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>





      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
               {/* photo main  */}
              <img  alt="Kangra Chess Club members group photo" className="rounded-lg shadow-lg w-full" src="/pic1.jpg" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Kangra Chess Club</h2>
              <p className="text-gray-600 mb-6">
                Established in 2016, Kangra Chess Club has been nurturing chess talent in the beautiful Kangra valley. 
                We provide a platform for players of all ages and skill levels to learn, compete, and excel in chess.
              </p>
              <p className="text-gray-600 mb-8">
                Our club has produced several district and state-level champions, and we continue to promote chess 
                education through regular tournaments, workshops, and training sessions.
              </p>

               {/*Learn more button */}
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link to="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>




      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us for exciting chess tournaments and learning opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6 card-hover shadow-md"
              >
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  event.type === 'Championship' ? 'bg-yellow-100 text-yellow-800' :
                  event.type === 'Workshop' ? 'bg-green-100 text-green-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {event.type}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <h3 className="text-xl font-semibold text-red-500 mb-2">{event.prize}</h3>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p className="text-gray-500 text-sm">{event.venue}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            {/* bUTTON All Tournaments */}
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/tournaments">
                View All Tournaments <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Join Our Chess Community?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Whether you're a beginner or an experienced player, Kangra Chess Club welcomes you. 
              Start your chess journey with us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-700">
                <Link to="/contact">Contact Us</Link>
              </Button>
               <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-700">
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
