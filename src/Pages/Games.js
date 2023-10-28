import GAMES from '../data/games';
import ProjectDisplayComponent from '../components/Projects';
export default function Games() {
  return (
    <div className="mt-8">
      <h1 className="uppercase text-semibold first-letter:text-rose-500 leading-tight text-4xl text-center mb-8 ">
        Games
      </h1>
      <ProjectDisplayComponent projects={GAMES} />
    </div>
  );
}
