import { useSelector } from 'react-redux';
import Recommendation from './Recommendation';

const Recommendations = () => {
    const recommendations = useSelector((state) => state.recommendations.recommendations);
    if (recommendations.length > 0) console.log(recommendations[0])
    return (
            <div>
                Recommendations:
                {recommendations.map((app, i) => <Recommendation key={i} app={app}/>               
                )}
            </div>
    )
}
export default Recommendations;