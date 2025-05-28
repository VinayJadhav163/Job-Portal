// components/ui/Toaster.jsx
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      // ✅ Proper centered position across all screen sizes, especially mobile
      className="toaster z-50 group fixed bottom-4 left-1/2 -translate-x-1/2 w-full max-w-[90%] px-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg " +
            "w-full sm:w-auto max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
