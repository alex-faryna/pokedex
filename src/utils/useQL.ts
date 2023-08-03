import { useQuery } from "@apollo/client";
import { client } from "../graphql/apollo";

export default function useQL(query: Parameters<typeof useQuery>[0]) {
    const { loading, error, data } = useQuery(query, { client });
    return { loading, error, data };
}