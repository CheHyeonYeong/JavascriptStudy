import Navigation from "../components/navigation"

export const metadata = {
        title: 'home',
    }
    
    export default function RootLayout({
        children,
    }: {
        children: React.ReactNode
    }) {
        return (
            <html >
                <body>
                <Navigation />
                <hr />
                </body>
            </html>
        )
    }