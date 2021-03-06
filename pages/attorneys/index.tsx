import { NextPage } from 'next';
import AttorneysDesktop from '../../views/desktop/attorneys/index.view';
import { isMobileDetector } from '../../helpers/utils.helpers';

const Attorneys: NextPage<{ isMobile: boolean; page: string }> = ({
  isMobile,
  page
}) => {
  return <AttorneysDesktop isMobile={isMobile} page={page} />;
};

Attorneys.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] || '' : navigator.userAgent;
  let isMobile = isMobileDetector(userAgent);

  return { isMobile, page: 'Attorneys' };
};

export default Attorneys;
