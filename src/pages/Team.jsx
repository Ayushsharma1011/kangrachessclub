import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, Star, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Team = () => {
  const navigate = useNavigate();

  const leadership = [
    { name: 'Mr. Amit Verma', position: 'Chief Patron', bio: 'A successful businessman and strong supporter of chess, helping the Kangra Chess Club with strategic and financial guidance.', contact: {}, achievements: [], image: '/amit-verma.jpg' },
    { name: 'Mr.Sanjay Sharma', position: 'President', bio: 'A passionate chess enthusiast with over 20 years of experience in chess administration. Under his leadership, Kangra Chess Club has grown from a small group to one of the most active chess clubs in Himachal Pradesh.', contact: {}, achievements: [], image: '/president.jpg' },
    { name: 'Mr. Deepak Chugh', position: 'Secretary', bio: 'Handles coordination and operations of Kangra Chess Club events and internal communication.', contact: {}, achievements: [], image: '/deepak-chugh.jpg' },
    { name: 'Mr. Subhash Kumar', position: 'Cashier', bio: 'Responsible for managing the finances and accounts of the club.', contact: {}, achievements: [], image: '/Cashier.jpg' },
    { name: 'Mr. Rochan Gupta', position: 'Joint Secretary', bio: 'Assists the Secretary in communication and coordination for events.', contact: {}, achievements: [], image: '/Rochan.jpg' },
    { name: 'Mr. Praveen Shashtri', position: 'Chief Advisory', bio: 'Provides visionary advisory support to the Kangra Chess Club for its policies and initiatives.', contact: {}, achievements: [], image: '/Cheif-Advisor.jpg' },
     { name: 'Mr. Amil Sharma', position: 'Advisor', bio: 'Provides visionary advisory support to the Kangra Chess Club for its policies and initiatives.', contact: {}, achievements: [], image: '/Advisor.jpg' }
  ];

  const arbiters = [
    { name: 'Atul Chaudhary', designation: 'Chief Arbiter (SNA)', fideId: 'IND-54321', experience: '10 years', specialization: 'State Tournaments', image: '/atul.jpg' },
    { name: 'Ayush Sharma', designation: 'Deputy Chief Arbiter (SNA)', fideId: 'IND-98765', experience: '2 years', specialization: 'State Tournaments', image: '/ayush.jpg' },
    { name: 'Aastha Verma', designation: 'Arbiter', fideId: 'IND-11223', experience: '1 years', specialization: 'Youth Category', image: '/aastha.jpg' },
    { name: 'Palak Bhawata', designation: 'Arbiter (SNA)', fideId: 'IND-77665', experience: '2 years', specialization: 'State Tournaments', image: '/palak.jpg' }
  ];

  const members = [
   /* 
    { name: 'Pranav', category: 'Senior', rating: '1850', achievements: ['District Champion 2023', 'State Runner-up 2022'], image: '' },
    { name: 'Arshiya Chaudhary', category: 'Youth', rating: '1690', achievements: ['Inter-College Champion', 'Blitz Chess Specialist'], image: '' }
      */
  ]

  const categoryColors = { 'Senior': 'bg-blue-100 text-blue-800', 'Youth': 'bg-green-100 text-green-800', 'Junior': 'bg-purple-100 text-purple-800' };

  return (
    <>
      <Helmet>
        <title>Our Team - Kangra Chess Club</title>
        <meta name="description" content="Meet the dedicated team of Kangra Chess Club including our president, arbiters, and talented members who make our chess community thrive." />
      </Helmet>

      {/* Leadership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Club Leadership</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Meet the visionary leaders managing Kangra Chess Club</p>
          </motion.div>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {leadership.map((person, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border-l-4 border-yellow-500 shadow-sm">
                <div className="flex gap-6 items-center">
                  <img src={person.image} alt={person.name} className="w-24 h-24 rounded-full object-cover shadow-md" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{person.name}</h3>
                    <p className="text-sm font-medium text-yellow-600 mb-2">{person.position}</p>
                    <p className="text-sm text-gray-600 mb-2">{person.bio}</p>
                    {person.contact?.email && <div className="text-sm text-gray-600 flex items-center mb-1"><Mail className="h-4 w-4 mr-2 text-blue-600" /> {person.contact.email}</div>}
                    {person.contact?.phone && <div className="text-sm text-gray-600 flex items-center"><Phone className="h-4 w-4 mr-2 text-green-600" /> {person.contact.phone}</div>}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Arbiters Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Arbiters</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Certified arbiters ensuring fair play and proper conduct in all our tournaments</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {arbiters.map((arbiter, index) => (
              <motion.div key={arbiter.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white p-6 rounded-lg shadow-md card-hover">
                <div className="text-center mb-4">
                  <img alt={`${arbiter.name} - Chess Arbiter`} className="w-24 h-24 rounded-full mx-auto shadow-md object-cover mb-4" src={arbiter.image} />
                  <h3 className="text-xl font-semibold text-gray-900">{arbiter.name}</h3>
                  <p className="text-blue-600 font-medium">{arbiter.designation}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between"><span className="text-sm text-gray-500">FIDE ID:</span><span className="text-sm font-medium text-gray-900">{arbiter.fideId}</span></div>
                  <div className="flex justify-between"><span className="text-sm text-gray-500">Experience:</span><span className="text-sm font-medium text-gray-900">{arbiter.experience}</span></div>
                  <div className="flex justify-between"><span className="text-sm text-gray-500">Specialization:</span><span className="text-sm font-medium text-gray-900">{arbiter.specialization}</span></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Active Players</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our talented members representing different age groups and skill levels</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {members.map((member, index) => (
              <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.05 }} className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm card-hover">
                <div className="text-center mb-4">
                  <img alt={`${member.name} - Chess Club Member`} className="w-20 h-20 rounded-full mx-auto shadow-md object-cover mb-3" src={member.image} />
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <div className="flex items-center justify-center space-x-2 mt-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${categoryColors[member.category]}`}>{member.category}</span>
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">Rating: {member.rating}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center"><Trophy className="h-4 w-4 mr-1 text-yellow-600" />Achievements</h4>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="text-xs text-gray-600 flex items-start"><Star className="h-3 w-3 mr-1 text-yellow-500 mt-0.5 flex-shrink-0" />{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-white mb-4">Want to Join Our Team?</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">Whether you're a beginner or an experienced player, we welcome chess enthusiasts of all levels. Join our growing community and be part of Kangra's chess excellence.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => navigate(`/contact`)} className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">Become a Member</button>
              <button onClick={() => navigate(`/contact`)} className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">Contact Us</button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Team;
