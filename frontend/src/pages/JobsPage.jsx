import JobListings from '../components/JobListings';

const JobsPage = ({isAuthenticated}) => {
  return (
    <section className='bg-blue-50 px-4 py-6'>
      <JobListings isAuthenticated={isAuthenticated} />
    </section>
  );
};
export default JobsPage;
