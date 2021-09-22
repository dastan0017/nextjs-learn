import Head from "next/head";
import {ApolloClient, InMemoryCache, gql} from "@apollo/client";
import styles from "../../styles/Layout.module.css";

const Projects = ({projects}) => {
	console.log(projects);
	return (
		<div>
			<Head>
				<title>NextJS projects</title>
				<meta
					name="keywords"
					content="NextJS and React development, programming"
				/>
			</Head>
			<meta
				name="keywords"
				content="NextJS and React development, programming"
			/>
			<h1>Here will go list of projects</h1>
			<div className={styles.grid}>
				{projects.map((el, idx) => (
					<div className={styles.card} key={idx}>
						<h2>{el.title}</h2>
						<p>{el.id}</p>
					</div>
				))}
			</div>
		</div>
	);
};
export async function getStaticProps(context) {
	const client = new ApolloClient({
		uri: "https://timelysoft-backend.herokuapp.com/graphql",
		cache: new InMemoryCache(),
	});

	const {data} = await client.query({
		query: gql`
			query GetProjects {
				projects {
					id
					title
				}
			}
		`,
	});

	return {
		props: {
			projects: data.projects,
		},
	};
}

export default Projects;
