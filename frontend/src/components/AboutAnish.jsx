import React from 'react';
// Import icons for the heart and star, using lucide-react as a modern icon library
import { Heart, Star, Users } from 'lucide-react';

// Mock image placeholder component to mimic the look of the card in the hero section
const ImagePlaceholder = () => (
  <div className="bg-gray-200 w-full h-80 rounded-3xl shadow-xl overflow-hidden relative p-8 flex items-center justify-center 
              transform rotate-3 scale-105 border border-gray-300 transition-all duration-300"
       style={{ 
         backgroundImage: 'linear-gradient(135deg, #F0F0F0 0%, #D0D0D0 100%)',
         // Slight shadow on the card itself
         boxShadow: '10px 10px 30px rgba(0,0,0,0.1), -10px -10px 30px rgba(255,255,255,0.7)'
       }}>
    <Users className="w-20 h-20 text-gray-500 opacity-60" />
  </div>
);

// Component for the Timeline items (Foundation Established, Campus Development, etc.)
const TimelineItem = ({ title, content, tag, isPrimary = false }) => (
  <div className="flex justify-start items-start space-x-6 md:space-x-12 my-6">
    {/* Timeline Tag/Button */}
    <div className="flex-shrink-0 w-24 md:w-32">
      <div className={`
        px-3 py-2 text-sm font-semibold text-white text-center rounded-lg shadow-md
        ${isPrimary ? 'bg-blue-600' : 'bg-blue-400'}
      `}>
        {tag}
      </div>
    </div>
    
    {/* Content Box */}
    <div className="flex-grow p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition duration-300 hover:shadow-2xl">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{content}</p>
    </div>
  </div>
);


const AboutAnish = () => {
  return (
    <div className="flex-grow bg-gray-50">
      <div className="container mx-auto px-6 py-16 md:py-24">
        
        {/* === Section 1: Hero - In Loving Memory === */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              In Loving Memory of <span className="block text-blue-600">Anish Jadhav</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Anish Jadhav was more than a beloved son—he was a light in the lives of all who knew him. His spirit, warmth, and dreams continue to inspire the mission of this foundation.
            </p>
            <div className="flex space-x-2 pt-2">
              <Heart className="w-6 h-6 text-yellow-600 fill-yellow-600" />
              <Star className="w-6 h-6 text-yellow-600 fill-yellow-600" />
            </div>
          </div>
          
          {/* Image Placeholder on the right */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-sm">
              <ImagePlaceholder />
            </div>
          </div>
        </section>

        {/* === Section 2: The Story Behind the Foundation === */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
            The Story Behind the Foundation
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8 text-lg text-gray-700">
            <p className="leading-relaxed">
              The Anish Jadhav Memorial Foundation was born from a profound love and an unwavering commitment to honor the memory of Anish Jadhav. Established by his father, Brigadier Kishor Jadhav, this foundation represents the transformation of personal grief into a powerful force for positive change.
            </p>
            
            <p className="leading-relaxed">
              Anish was a young man of exceptional character, compassion, and potential. His life, though tragically cut short, left an indelible mark on everyone he encountered. His dreams, his kindness, and his belief in the power of education and opportunity became the cornerstone of what would become this foundation.
            </p>
            
            <p className="leading-relaxed">
              Brigadier Kishor Jadhav, a man of distinguished service and unwavering principles, chose to channel his loss into creating something that would ensure his son's legacy would live on—not in sorrow, but in hope. He envisioned a place where underprivileged youth could find the same opportunities, the same belief in their potential, and the same unwavering support that he had given his own son.
            </p>
            
            {/* Callout Quote Box */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg shadow-md mt-10">
              <p className="italic text-gray-800">
                "In honoring Anish's memory, we create a future filled with hope. Every student we empower, every life we transform, is a living testament to his spirit and the dreams he carried."
              </p>
              <p className="text-right text-sm font-semibold text-blue-600 mt-4">
                — Brigadier Kishor Jadhav
              </p>
            </div>
          </div>
        </section>

        {/* === Section 3: Partnership with NavGurukul === */}
        <section className="mb-24 bg-white p-10 md:p-16 rounded-3xl shadow-xl">
          <div className="max-w-5xl mx-auto text-lg text-gray-700 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 pb-2">
              Our Vision in Partnership
            </h2>
            <p className="leading-relaxed">
              In partnership with NavGurukul, a pioneering organization committed to providing residential education to underprivileged youth, the foundation has created a comprehensive ecosystem of learning and growth. The partnership ensures that students receive not just education, but a complete transformation—from residential facilities and nutritious meals to world-class instruction and career placement support.
            </p>
            <p className="leading-relaxed">
              Today, the Anish Jadhav Memorial Foundation stands as a beacon of hope, offering four specialized schools that provide pathways to success in **programming, business, education, and second-chance opportunities**. Each student who walks through our doors carries forward Anish's legacy, turning dreams into reality and transforming their lives and communities.
            </p>
          </div>
        </section>

        {/* === Section 4: A Timeline of Impact === */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">
            A Timeline of Impact
          </h2>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-1/4 md:left-32 top-0 bottom-0 w-1 bg-blue-200 hidden md:block"></div>

            <TimelineItem
              tag="The Beginning"
              title="Foundation Established"
              content="Brigadier Kishor Jadhav establishes the Anish Jadhav Memorial Foundation in loving memory of his son, partnering with NavGurukul to create a lasting impact."
            />
            
            <TimelineItem
              tag="Building Hope"
              title="Campus Development"
              content="Construction and development of comprehensive residential facilities, creating a nurturing environment for underprivileged youth to learn and grow."
            />
            
            <TimelineItem
              tag="Programs Launch"
              title="Four Schools Open"
              content="Launch of the School of Programming, School of Business, School of Education, and School of Second Chance, offering diverse pathways to success."
              isPrimary={true}
            />

            <TimelineItem
              tag="Today"
              title="Transforming Lives"
              content="Continuing to empower students with education, skills, and opportunities, creating a ripple effect of positive change across communities."
            />
          </div>
        </section>

        {/* === Section 5: His Legacy Lives On === */}
        <section className="text-center pt-12 pb-6 bg-white rounded-3xl shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            His Legacy Lives On
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Every student we educate, every life we transform, every dream we help realize is a tribute to Anish Jadhav. His spirit lives on in the halls of our campus, in the determination of our students, and in the hope we carry forward each day.
          </p>
          <div className="flex justify-center mt-8">
            <Heart className="w-8 h-8 text-yellow-600 fill-yellow-600" />
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutAnish;
