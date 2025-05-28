// components/ui/Toaster.jsx
import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      // ✅ Inline style guarantees it works across devices
      style={{
        position: "fixed",
        bottom: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100%",
        maxWidth: "90%",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        zIndex: 9999,
      }}
      toastOptions={{
        classNames: {
          toast:
            "bg-background text-foreground border border-border shadow-lg " +
            "w-full sm:w-auto max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base",
          description: "text-muted-foreground",
          actionButton: "bg-primary text-primary-foreground",
          cancelButton: "bg-muted text-muted-foreground",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
