import ContentLoader from "react-content-loader"

const SkeletonLoader = () => (
  <ContentLoader 
    className="card"
    speed={2}
    width={292}
    height={436}
    viewBox="0 0 292 436"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
   
  >
    <rect x="45" y="62" rx="7" ry="7" width="182" height="186" /> 
    <rect x="28" y="274" rx="7" ry="7" width="225" height="23" /> 
    <rect x="28" y="312" rx="7" ry="7" width="225" height="47" /> 
    <rect x="29" y="372" rx="7" ry="7" width="77" height="49" /> 
    <rect x="120" y="373" rx="7" ry="7" width="131" height="47" />
  </ContentLoader>
)

export default SkeletonLoader