'use client';

import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  MenuIcon,
  ShieldCheckIcon,
} from 'lucide-react';
import Logo from './Logo';
import Link from 'next/link';
import { Button, buttonVariants } from './ui/button';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const routes = [
  {
    href: '',
    label: 'Home',
    icon: HomeIcon,
  },
  {
    href: 'workflows',
    label: 'Worflows',
    icon: Layers2Icon,
  },
  {
    href: 'credentials',
    label: 'Credentials',
    icon: ShieldCheckIcon,
  },
  {
    href: 'billing',
    label: 'Billing',
    icon: CoinsIcon,
  },
];

const DesktopSidebar = () => {
  const pathname = usePathname();
  const activeRoute =
    routes.find(({ href }) => href.length > 0 && pathname.includes(href)) ||
    routes[0];

  return (
    <div className="hidden relative md:block min-w-[280px] max-w-[280px] h-screen overflow-hidden w-ful bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate p-4">
      <div className="flex items-center justify-center gap-2 border-b-[1px]">
        <Logo />
      </div>
      <div className="p-2">TODO: CREDITS</div>
      <div className="flex flex-col p-2">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={buttonVariants({
              variant:
                activeRoute.href === route.href
                  ? 'sidebarActiveItem'
                  : 'sidebarItem',
            })}
          >
            <route.icon size={20} />
            {route.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export function MobileSideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const activeRoute =
    routes.find(({ href }) => href.length > 0 && pathname.includes(href)) ||
    routes[0];

  return (
    <div className="block border-separate bg-background md:hidden">
      <nav className="container flex items-center justify-between px-8-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="w-[400px] sm:w-[540px] space-y-4"
            side="left"
          >
            <Logo />
            <div className="flex flex-col gap-1">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={buttonVariants({
                    variant:
                      activeRoute.href === route.href
                        ? 'sidebarActiveItem'
                        : 'sidebarItem',
                  })}
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <route.icon size={20} />
                  {route.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>{' '}
    </div>
  );
}
export default DesktopSidebar;
