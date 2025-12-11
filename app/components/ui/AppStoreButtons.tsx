import { AppStoreIcon } from "@/components/icons/AppStoreIcon";
import { PlayStoreIcon } from "@/components/icons/PlayStoreIcon";

interface AppStoreButtonsProps {
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export function AppStoreButtons({
  appStoreUrl = "#",
  playStoreUrl = "#",
}: AppStoreButtonsProps) {
  return (
    <div className="grid grid-cols-2 sm:flex sm:flex-row gap-3 sm:gap-4">
      <a
        href={appStoreUrl}
        className="flex items-center justify-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-3 sm:py-3.5 bg-foreground text-white rounded-xl hover:bg-foreground/90 active:bg-foreground/90 transition-colors border border-white/10"
      >
        <AppStoreIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
        <div className="text-left min-w-0">
          <div className="text-[0.6rem] sm:text-[0.65rem] opacity-70 leading-tight">
            Download on the
          </div>
          <div className="font-semibold text-[0.8rem] sm:text-[0.9rem] leading-tight">
            App Store
          </div>
        </div>
      </a>
      <a
        href={playStoreUrl}
        className="flex items-center justify-center gap-2.5 sm:gap-3 px-4 sm:px-6 py-3 sm:py-3.5 bg-foreground text-white rounded-xl hover:bg-foreground/90 active:bg-foreground/90 transition-colors border border-white/10"
      >
        <PlayStoreIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
        <div className="text-left min-w-0">
          <div className="text-[0.6rem] sm:text-[0.65rem] opacity-70 leading-tight">
            Get it on
          </div>
          <div className="font-semibold text-[0.8rem] sm:text-[0.9rem] leading-tight">
            Google Play
          </div>
        </div>
      </a>
    </div>
  );
}
