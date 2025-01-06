

export default function Navigation() {
  const navItems = ['Game', 'About', 'Videos', 'Guide'];
  
  return (
    <nav className="flex gap-6">
      {navItems.map(item => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-gray-300 hover:text-white transition-colors"
        >
          {item}
        </a>
      ))}
    </nav>
  );
}