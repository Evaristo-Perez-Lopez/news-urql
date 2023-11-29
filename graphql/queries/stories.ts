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

export const STORY_BY_ID = gql`
	query Query($id: ID!) {
		story(id: $id) {
			id
			author
			summary
			text
			title
		}
	}
`;
