import Nav from "./Nav";
import styles from "../styles/Layout.module.css";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import React from "react";

// apollo client
const client = new ApolloClient({
	uri: "https://timelysoft-backend.herokuapp.com/graphql",
	cache: new InMemoryCache(),
});

const Layout = ({children}) => {
	return (
		<>
			<ApolloProvider client={client}>
				<Nav />
				<div className={styles.container}>
					<main className={styles.main}>{children}</main>
				</div>
			</ApolloProvider>
		</>
	);
};

export default Layout;
