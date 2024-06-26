import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";
import Emoji from "./Emoji";

interface Props {
    game: Game;
}

const GameCard = ({ game }: Props) => {
    return (
        <GameCardContainer>
            <Card>
                <Image src={getCroppedImageUrl(game.background_image)}/>
                <CardBody>
                    <HStack justifyContent="space-between" marginBottom={3}>
                        <PlatformIconList platforms={game?.parent_platforms?.map(({platform}) => platform)}/>
                        <CriticScore score={game.metacritic}/>
                    </HStack>
                    <Heading fontSize="2xl">
                        <HStack alignItems="center">
                            <p>{game.name}</p>
                            <Emoji rating={game.rating_top}/>
                        </HStack>
                    </Heading>
                </CardBody>
            </Card>
        </GameCardContainer>
    )
}

export default GameCard;