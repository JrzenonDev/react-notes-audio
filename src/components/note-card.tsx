export function NoteCard() {
  return (
    <button className="rounded-md text-left bg-slate-800 p-5 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-600">
      <span className="text-sm font-medium text-slate-300">há 1 semana</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam velit
        ut laboriosam repellat temporibus necessitatibus, ab culpa aspernatur
        aliquam. Repellendus deserunt ratione ut. Quod aliquid possimus
        repellendus porro libero sequi! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Facere voluptate ex quia quaerat deserunt ullam magni
        suscipit iusto fugit tenetur hic dolore, distinctio, molestias eaque
        illum maxime, perferendis harum in?
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}
