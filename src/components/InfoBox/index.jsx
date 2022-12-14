import { useEffect, useState, useContext } from 'react';
import './InfoBox.css';
import ExpandCollapseArrow from '../ExpandCollapseArrow';
import TextWithIcon from '../TextWithIcon';
import {
    faEnvelope,
    faPhone,
    faGlobe,
} from '@fortawesome/free-solid-svg-icons';
// import useBrowserWidth from '../../hooks/useBrowserWidth';
import cyLogo from '../../assets/community_yard-logo.svg';
import browserWidthContext from '../../context/browserWidthContext';

function InfoBox({ props }) {
    const [expand, setExpand] = useState(false);

    const desktop = useContext(browserWidthContext);

    useEffect(() => {
        if (desktop) {
            setExpand(true);
        } else {
            setExpand(false);
        }
    }, [desktop]);

    return (
        <div className={`InfoBox ${expand ? `expandedInfoBox` : ''}`}>
            <div className='preview'>
                <div className='values'>
                    <h4 style={{ fontWeight: 'bold' }}>{props.name}</h4>
                    <h4>
                        {props.firstLine} {props.secondLine}
                    </h4>
                    <h4>{props.town}</h4>
                    <h4>{props.postcode}</h4>
                </div>
                {!desktop && (
                    <ExpandCollapseArrow state={expand} setState={setExpand} />
                )}
                {!desktop && <img className='logo-mobile' src={cyLogo} />}
                <div></div>
            </div>

            <div className={`hiddenText ${expand ? `expandedText` : ''}`}>
                <div className='contact-details'>
                    <TextWithIcon text={props.phone} icon={faPhone} />
                    <TextWithIcon text={props.email} icon={faEnvelope} />
                    <TextWithIcon text={props.website} icon={faGlobe} />
                </div>
                <details className='survey'>
                    <summary>have you visited {props.name}?</summary>
                    <h4>check all that apply</h4>
                    <br />
                    <h4>staff are friendly</h4>
                    <h4>easy to find</h4>
                    <h4>parking is available</h4>
                    <h4>produce is good quality</h4>
                    <h4>wheelchair access available</h4>
                </details>
            </div>
        </div>
    );
}

export default InfoBox;
