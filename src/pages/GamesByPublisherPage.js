import { useState, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import GameList from "../components/containers/GameList/GameList";
import SpinnerB from "../components/elements/loading-animations/SpinnerB";
import withRouteChangeRemounting from "../hoc/withRouteChangeRemounting";
import useApiRequest from "../hooks/useApiRequest";
import { getPublisherDetail } from "../utils/apiRequests";

const GamesByPublisherPage = () => {
  const publisherParam = useParams()["publisher"];
  const publisherRequest = useApiRequest(() => getPublisherDetail(publisherParam));
  const [publisherDetail, setPublisherDetail] = useState();

  useEffect(() => {
    publisherRequest.makeRequest();
  }, []);

  useEffect(() => {
    !!publisherRequest.data && setPublisherDetail(publisherRequest.data);
  }, [publisherRequest.data]);

  const GameListWithRouteChangeRemounting = useMemo(() => withRouteChangeRemounting(GameList), []);

  return publisherRequest.error ? (
    <h1>SOMETHING WENT WRONG</h1>
  ) : publisherRequest.loading ? (
    <SpinnerB className="w-full flex justify-center m-[20px] px-[20px]"></SpinnerB>
  ) : !!publisherDetail?.id ? (
    <GameListWithRouteChangeRemounting publisher={publisherDetail}></GameListWithRouteChangeRemounting>
  ) : (
    <h1>Publisher not found</h1>
  );
};

export default GamesByPublisherPage;