import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LockClosedIcon,
  MixerVerticalIcon,
  MoonIcon,
  RocketIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";

type UserDropdownProps = {
  user: Session["user"];
};

export function UserDropdown({ user }: UserDropdownProps) {
  if (!user) return;

  const {theme, setTheme} = useTheme();


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="link"
          className="relative h-8 flex items-center justify-between space-x-2 w-full !px-0"
        >
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.image as string} alt={user.name as string} />
            <AvatarFallback className="uppercase">{user.email?.charAt(0)}</AvatarFallback>
          </Avatar>

          <div className="flex flex-col flex-1 space-y-1 text-left">
            {user.name && (
              <p className="text-sm font-medium leading-none">{user.name}</p>
            )}
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <SunIcon className="w-3 h-3 mr-3  hidden dark:inline " />
            <MoonIcon className="w-3 h-3 mr-3  dark:hidden " />
            Toggle theme
          </DropdownMenuItem>
          <DropdownMenuItem>
            <MixerVerticalIcon className="w-3 h-3 mr-3" />
            Configurações
          </DropdownMenuItem>
          <DropdownMenuItem>
            <RocketIcon className="w-3 h-3 mr-3" />
            Upgrade
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()}>
          <LockClosedIcon className="w-3 h-3 mr-3" />
          Log out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
