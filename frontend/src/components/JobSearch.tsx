export default function JobSearch() {
  return (
    <>
      <div>
        <div className="flex justify-center p-12">
          <input
            type="text"
            placeholder="Search by job title, tech stack, company..."
            className="p-4 w-full rounded-xl border-2 border-black ... outline-transparent"
            // value={searchQuery}
            // onChange={handleSearch}
          />
        </div>
        <div></div>
      </div>
    </>
  );
}
