/** @format */

import { Button } from '../ui/button';
import { Separator } from '../ui/separator';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { Menu } from 'lucide-react';

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent>
        <SheetTitle>Welcome to Food-order</SheetTitle>
        <Separator />
        <SheetDescription className="flex">
          <Button
            className="flex-1 font-bold text-orange-500 mt-10"
            variant="link"
          >
            Login
          </Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
