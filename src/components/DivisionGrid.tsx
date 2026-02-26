import { divisions } from '../data/divisions';
import DivisionCard from './DivisionCard';

export default function DivisionGrid() {
  return (
    <section className="relative z-10 py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {divisions.map((division, index) => (
          <DivisionCard 
            key={division.id} 
            division={division} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
}
