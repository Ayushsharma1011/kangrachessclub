
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Trophy, Target, Heart, Award, Users, Calendar } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      year: '2023',
      title: 'State Championship Runner-up',
      description: 'Our junior player secured 2nd position in Himachal Pradesh State Championship'
    },
    {
      year: '2022',
      title: 'District Champions',
      description: 'Won the Kangra District Chess Championship for the third consecutive year'
    },
    {
      year: '2021',
      title: 'Youth Excellence Award',
      description: 'Recognized for outstanding contribution to youth chess development'
    },
    {
      year: '2020',
      title: 'Online Tournament Winners',
      description: 'Adapted to digital format and won multiple online chess tournaments'
    }
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Parent',
      quote: 'My son has improved tremendously since joining Kangra Chess Club. The coaches are excellent and the environment is very supportive.'
    },
    {
      name: 'Priya Sharma',
      role: 'Player',
      quote: 'This club has given me the confidence to compete at state level. The training sessions are well-structured and motivating.'
    },
    {
      name: 'Dr. Amit Verma',
      role: 'Local Chess Enthusiast',
      quote: 'Kangra Chess Club is doing wonderful work in promoting chess culture in our region. Highly recommended for all chess lovers.'
    }
  ];
  // Add this sponsor data just above the Achievements section (place with your other consts)
const sponsors = [
  {
    name: 'Dy Patil International School Kangra',
    md: 'MD Agam Sharma',
    logo: '/s1.jpeg' // optional: replace with actual logo path or leave as placeholder
  },
  {
    name: 'Himachal floor mill',
    md: 'MD Yogesh Gupta',
    logo: '/s2.png'
  },
  {
    name: 'Jayanti software solutions kangra',
    md: 'MD Amit Verma',
    logo: '/amit-verma.jpg'
  },
  {
    name: 'Gyan Jyoti College of Education Rajol',
    md: 'MD Varinder Choudhary',
    logo: '/s4.jpeg'
  },
  {name: 'Jai Siyaram Home Renovation and Interiors',
    md: 'Mr. Deepak Chugh ',
    logo: '/s5.jpg'
  }
];


  return (
    <>
      <Helmet>
        <title>About Us - Kangra Chess Club</title>
        <meta name="description" content="Learn about Kangra Chess Club's history, mission, vision, and achievements in promoting chess excellence in Kangra region." />
      </Helmet>

      
      
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Kangra Chess Club</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our journey, mission, and commitment to chess excellence in the beautiful Kangra valley
            </p>
          </motion.div>
        </div>
      </section>




      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
              <p className="text-gray-600 mb-6">
                Kangra Chess Club was founded in 2016 by a group of passionate chess enthusiasts who wanted to create 
                a platform for chess development in the Kangra region. What started as a small gathering of chess lovers 
                has now grown into one of the most active chess clubs in Himachal Pradesh.
              </p>
              <p className="text-gray-600 mb-6">
                Over the years, we have organized numerous tournaments, workshops, and training sessions, helping hundreds 
                of players improve their game. Our club has become a breeding ground for chess talent, producing several 
                district and state-level champions.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">2016</div>
                  <div className="text-sm text-gray-500">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">150+</div>
                  <div className="text-sm text-gray-500">Members</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-500">Tournaments</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img  alt="Historical photo of Kangra Chess Club founding members" className="rounded-lg shadow-lg w-full" src="h1.jpg" />
            </motion.div>
          </div>
        </div>
      </section>





      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-600">
                To promote chess as a sport and educational tool in the Kangra region, providing quality training, 
                organizing competitive tournaments, and creating opportunities for players of all ages and skill levels 
                to develop their chess abilities and achieve their full potential.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Heart className="h-8 w-8 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600">
                To establish Kangra as a recognized chess hub in Himachal Pradesh, nurturing world-class chess talent 
                and making chess accessible to every child and adult in our community, while preserving the rich 
                cultural heritage of our region.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Sponsors Section — paste this block just above your Achievements section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Sponsors</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        We are grateful to our sponsors for supporting the growth of chess in Kangra.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {sponsors.map((sponsor, index) => (
        <motion.div
          key={sponsor.name}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md text-center"
        >
          <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center rounded-full border overflow-hidden bg-white">
            {/* replace src with actual logo path or keep as placeholder */}
            <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="object-contain w-full h-full" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">{sponsor.name}</h3>
          <p className="text-sm text-gray-600 mt-2">{sponsor.md}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Celebrating our milestones and the success of our members over the years
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-500"
              >
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-yellow-600 mr-2" />
                  <span className="text-lg font-bold text-yellow-600">{achievement.year}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>





     {/* Club Activities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Club Activities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the vibrant chess culture at our club through various activities and events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
             <img  alt="Chess tournament in progress" className="rounded-lg shadow-lg w-full mb-4" src="ca1.jpg" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img  alt="Chess tournament in progress" className="rounded-lg shadow-lg w-full mb-4" src="ca2.jpg" />
            </motion.div>
            
           
           <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img  alt="Chess tournament in progress" className="rounded-lg shadow-lg w-full mb-4" src="ca3.jpg" />
            </motion.div>
                <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img  alt="Chess tournament in progress" className="rounded-lg shadow-lg w-full mb-4" src="ca4.jpg" />
            </motion.div>
               <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <img  alt="Chess tournament in progress" className="rounded-lg shadow-lg w-full mb-4" src="ca5.jpg" />
            </motion.div>
            
          </div>
        </div>
      </section>




      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What People Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our members and community about their experience with Kangra Chess Club
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-blue-50 p-6 rounded-lg"
              >
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
