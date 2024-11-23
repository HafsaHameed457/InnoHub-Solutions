import { useMemo } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

// Custom Hook
export default function useRouter() {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  return useMemo(() => {
    return {
      navigate: navigate,
      pathname: location.pathname,

      query: {
        ...queryString.parse(location.search),
        ...params,
      },

      location,
    };
  }, [params, location, navigate]);
}
