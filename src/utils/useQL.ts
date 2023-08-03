import { useQuery } from "@apollo/client";
import { client } from "../graphql/apollo";

type useQueryParams = Parameters<typeof useQuery>;

export default function useQL(query: useQueryParams[0], options: useQueryParams[1]) {
    const { loading, error, data } = useQuery(query, { client, ...options });
    return { loading, error, data };
}