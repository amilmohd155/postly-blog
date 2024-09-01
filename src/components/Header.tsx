import MobileNav from "./mobile/mobile-nav";
import DesktopNav from "./desktop/desktop-nav";
``;
export default function Header() {
  return (
    <nav aria-label="Main Navigation">
      {/* Mobile Navigation */}
      <MobileNav />
      {/* Desktop Nav */}
      <DesktopNav />
    </nav>
  );
}
