import { Button } from '../components/Button';

interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  selectedGenreId: number
  genres: GenreResponseProps[],
  handleClickButton: Function
}

export function SideBar(props: SideBarProps) {

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(({ id, title, name }) => (
          <Button
            key={String(id)}
            title={title}
            iconName={name}
            onClick={() => props.handleClickButton(id)}
            selected={props.selectedGenreId === id}
          />
        ))}
      </div>
    </nav>
  )
}