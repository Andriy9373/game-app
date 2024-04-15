import meh from '../assets/meh.png';
import like from '../assets/like.png';
import target from '../assets/target.png';
import { Image } from '@chakra-ui/react';

interface Props {
    rating: number;
};

const Emoji = ({ rating }: Props) => {

    const emojiMap: { [key: number]: { src: string, alt: string } } = {
        3: { src: meh, alt: 'meh' },
        4: { src: like, alt: 'recommended' },
        5: { src: target, alt: 'exceptional' },
    }

    if (rating < 3) return null;
    
    return (
        <Image src={emojiMap[rating].src} alt={emojiMap[rating].alt} boxSize="25px" marginBottom={1} />
    )
}

export default Emoji;