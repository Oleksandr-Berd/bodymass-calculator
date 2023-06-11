import React from 'react';
import advices from 'utilities/advices.json';
import AdviceItem from './Advices.Item';
import { ReactComponent as Advice1Svg } from 'assets/images/advice1.svg';
import { ReactComponent as Advice2Svg } from 'assets/images/advice2.svg';
import { ReactComponent as Advice3Svg } from 'assets/images/advice3.svg';

interface Advice {
    id: number;
    icon: string;
    title: string;
    text: string;
}

const adviceIcons: Record<string, React.FC> = {
    advice1: Advice1Svg,
    advice2: Advice2Svg,
    advice3: Advice3Svg,
};

const Advices: React.FC = () => {
    return (
        <div>
            <ul>
                {advices.map(({ id, icon, title, text }: Advice) => {
                    const IconComponent = adviceIcons[icon];
                    return <AdviceItem key={id} icon={<IconComponent />} title={title} text={text} />;
                })}
            </ul>
        </div>
    );
};

export default Advices;
