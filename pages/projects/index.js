import Head from "next/head";
import {ApolloClient, InMemoryCache, gql, useQuery} from "@apollo/client";

const GET_PROJECTS = gql`
	query GetProjects {
		projects {
			id
			title
		}
	}
`;

const Projects = () => {
	const {loading, error, data} = useQuery(GET_PROJECTS);

	if (loading) return <p>...loading</p>;
	if (error) return <p>Error :</p>;

	console.log(data);
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
			{data.projects.map((el, idx) => (
				<div key={idx}>
					<h2>{el.title}</h2>
					<p>{el.id}</p>
				</div>
			))}
		</div>
	);
};



export default Projects;
