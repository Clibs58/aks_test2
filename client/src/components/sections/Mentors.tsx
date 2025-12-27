{/* ===== MOBILE SWIPE ===== */}
{!showAll && (
  <div className="md:hidden relative mb-16 px-6 overflow-hidden">
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-6"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onUpdate={(latest) => {}}
        ref={(el) => {
          if (!el) return;
          const parent = el.parentElement;
          if (!parent) return;

          // dynamically calculate draggable distance
          const draggableWidth = el.scrollWidth - parent.offsetWidth;

          el.style.setProperty("--left", `-${draggableWidth}px`);
        }}
        style={{
          x: 0,
        }}
        dragElastic={0.2}
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        onDrag={(event, info) => {
          const parent = event.target.parentElement;
          const fullWidth = event.target.scrollWidth - parent.offsetWidth;
          if (info.offset.x < -fullWidth) info.offset.x = -fullWidth;
        }}
      >
        {mentors.map((mentor) => (
          <div
            key={mentor.id}
            className="min-w-[260px] w-64 rounded-xl bg-white/5 border border-white/10 px-6 py-6 text-center flex-shrink-0 cursor-grab active:cursor-grabbing"
          >
            <img
              src={mentor.image}
              className="mx-auto mb-4 h-20 w-20 rounded-full object-cover border border-white/20"
            />
            <h3 className="text-lg font-semibold text-white">
              {mentor.name}
            </h3>
            <p className="text-sm text-gray-400 mb-4 line-clamp-3">
              {mentor.role}
            </p>
            <a
              href={mentor.profile}
              target="_blank"
              className="inline-flex rounded-md border border-white/20 bg-white/5 px-4 py-1.5 text-sm text-white hover:bg-[#0B1F33]"
            >
              View Profile →
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  </div>
)}
