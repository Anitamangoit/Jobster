import { useEffect } from 'react';
import { StatsContainer, ChartsContainer } from '../../components';
import Loading from '../../components/Loading';
import { useDispatch, useSelector } from 'react-redux';
import { showStats } from '../../features/allJobs/allJobsSlice';
const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
    // eslint-disable-next-line
  }, []);
  if (isLoading) {
    return <Loading center />;
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;