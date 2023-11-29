import { gql } from "urql";

export const ALL_STORIES = gql`
	query Query {
		stories {
			id
			author
			title
			summary
		}
	}
`;
