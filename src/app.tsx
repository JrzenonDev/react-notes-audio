import logo from "./assets/logo.svg";
import { NewNoteCard } from "./components/new-note-card";
import { NoteCard } from "./components/note-card";

export function App() {
  const note = {
    date: new Date(),
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit ullam odio saepe, omnis perferendis accusamus commodi velit sit cumque quasi aut dolor, quis ipsam porro odit deleniti itaque hic at.",
  };
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="logo" />
      <form className="w-full">
        <input
          type="text"
          placeholder="Busque suas notas"
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 gap-6 auto-rows-[250px]">
        <NewNoteCard />

        <NoteCard note={note} />
        <NoteCard note={note} />
      </div>
    </div>
  );
}
