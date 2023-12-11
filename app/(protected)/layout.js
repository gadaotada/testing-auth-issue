import NavBar from "@/components/nav"

export default function ProtectedLayout({ children }) {
    return (
        <>
            <NavBar />
            {children}
        </>
    )
  }