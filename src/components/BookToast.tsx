import { Toaster } from "sonner"

export default function BookToast() {
    return <Toaster richColors
    position="top-center"
    expand={false}
    toastOptions={{
        style: {
            background: "rgba(255, 255, 255, 0.9)",
            borderRadius: "5px",
            backdropFilter: "blur(3px)"
        }
    }}/>
}