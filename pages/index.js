import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";

export default function Home() {
	return (
		<div>
			<Head>
				<title>NextJS tutorial</title>
				<meta
					name="keywords"
					content="NextJS and React development, programming"
				/>
			</Head>
			<h1>Hello from Home Page</h1>
		</div>
	);
}
