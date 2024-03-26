import { Suspense } from "react";
import "@/app/globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Loading from "./loading";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import FooterComponent from "@/components/footer/FooterComponent";
import { localCustomFont, inter, suwannaphum } from './fonts';


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${suwannaphum.variable} ${localCustomFont.variable}`} >
				<header>
					<NavbarComponent />
				</header>
				<main className="flex-1 h-screen">
					<ErrorBoundary errorComponent={Error}>
						<Suspense fallback={<Loading />}>{children}</Suspense>
					</ErrorBoundary>
				</main>
				{/* <footer>
					<FooterComponent/>
				</footer> */}
			</body>
		</html>
	);
}
