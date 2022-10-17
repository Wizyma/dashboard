import { useQuery } from "@tanstack/react-query";

import { GET_DOCUMENT_QUERY_KEY } from "../../../constants";
import { api } from "../../../utils";

export const useDocuments = () => {
  const response = useQuery({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error ?
    queryKey: [GET_DOCUMENT_QUERY_KEY],
    queryFn: api.getDocuments,
    onError: () => console.log("error"),
  });

  return response;
};
