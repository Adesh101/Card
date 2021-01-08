
import * as React from 'react';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import {
  FontWeights,
  Stack,
  IStackTokens,
  Text,
  ITextStyles,
} from 'office-ui-fabric-react';

const alertClicked = (): void => {
  alert('Clicked');
};

export class CardVerticalExample extends React.Component<{}, {}> {
  public render(): JSX.Element {
    const descriptionTextStyles: ITextStyles = {
      root: {
        color: '#333333',
        fontWeight: FontWeights.semibold,
      },
    };
    const backgroundImageCardSectionStyles: ICardSectionStyles = {
      root: {
        backgroundImage: 'url(https://placehold.it/256x144)',
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        height: 184,
        width: 212
      },
    };
    const subduedTextStyles: ITextStyles = {
      root: {
        color: '#666666',
      },
    };

    const sectionStackTokens: IStackTokens = { childrenGap: 20 };
    const cardTokens: ICardTokens = { childrenMargin: 8 };
    const backgroundImageCardSectionTokens: ICardSectionTokens = { padding: 12 };

    return (
      
      <Stack horizontal tokens={sectionStackTokens}>   
        <Card
          aria-label="Clickable vertical card with image bleeding at the top of the card"
          onClick={alertClicked}
          tokens={cardTokens}
        >
          <Card.Section
            fill
            verticalAlign="end"
            styles={backgroundImageCardSectionStyles}
            tokens={backgroundImageCardSectionTokens}
          >
            <Text>
              
            </Text>
          </Card.Section>
          <Card.Section>
            <Text variant="small" styles={subduedTextStyles}>
              Animals & Pets
            </Text>
            <Text styles={descriptionTextStyles}>4000</Text>
          </Card.Section>
        </Card>
        <Card
          aria-label="Clickable vertical card with image bleeding at the top of the card"
          onClick={alertClicked}
          tokens={cardTokens}
        >
          <Card.Section
            fill
            verticalAlign="end"
            styles={backgroundImageCardSectionStyles}
            tokens={backgroundImageCardSectionTokens}
          >
            <Text>
              
            </Text>
          </Card.Section>
          <Card.Section>
            <Text variant="small" styles={subduedTextStyles}>
              Animals & Pets
            </Text>
            <Text styles={descriptionTextStyles}>4000</Text>
          </Card.Section>
        </Card>
        <Card
          aria-label="Clickable vertical card with image bleeding at the top of the card"
          onClick={alertClicked}
          tokens={cardTokens}
        >
          <Card.Section
            fill
            verticalAlign="end"
            styles={backgroundImageCardSectionStyles}
            tokens={backgroundImageCardSectionTokens}
          >
            <Text>
              
            </Text>
          </Card.Section>
          <Card.Section>
            <Text variant="small" styles={subduedTextStyles}>
              Animals & Pets
            </Text>
            <Text styles={descriptionTextStyles}>4000</Text>
          </Card.Section>
        </Card>
      </Stack>
    );
  }
}