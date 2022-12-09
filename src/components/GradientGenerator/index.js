import {Component} from 'react'
import {
  GradientContainer,
  GradientGeneratorContent,
  GradientHeading,
  GradientParagraph,
  DirectionButtonsList,
  ColorsContainer,
  ColorNameAndColorContainer,
  ColorInput,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    firstInput: '#014f7b',
    secondInput: '#8ae323',
    directionValue: gradientDirectionsList[0].value,
    gradientColor: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b`,
  }

  getDirectionItem = direction => {
    this.setState({directionValue: direction})
  }

  onChangeFirstColor = event => {
    this.setState({firstInput: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondInput: event.target.value})
  }

  onClickGenerateButton = () => {
    const {firstInput, secondInput, directionValue} = this.state

    this.setState({
      gradientColor: `to ${directionValue}, ${secondInput}, ${firstInput}`,
    })
  }

  render() {
    const {firstInput, secondInput, gradientColor, directionValue} = this.state
    return (
      <GradientContainer gradientValue={gradientColor} data-testid="gradientGenerator">
        <GradientGeneratorContent>
          <GradientHeading>Generate a CSS Color Gradient</GradientHeading>
          <GradientParagraph>Choose Direction</GradientParagraph>
          <DirectionButtonsList>
            {gradientDirectionsList.map(eachDirection => (
              <GradientDirectionItem
                key={eachDirection.directionId}
                getDirectionItem={this.getDirectionItem}
                directionDetails={eachDirection}
                isActive={directionValue === eachDirection.value}
              />
            ))}
          </DirectionButtonsList>
          <GradientParagraph>Pick the Colors</GradientParagraph>
          <ColorsContainer>
            <ColorNameAndColorContainer>
              <GradientParagraph>{secondInput}</GradientParagraph>
              <ColorInput
                type="color"
                onChange={this.onChangeSecondColor}
                value={secondInput}
              />
            </ColorNameAndColorContainer>
            <ColorNameAndColorContainer>
              <GradientParagraph>{firstInput}</GradientParagraph>
              <ColorInput
                type="color"
                onChange={this.onChangeFirstColor}
                value={firstInput}
              />
            </ColorNameAndColorContainer>
          </ColorsContainer>
          <GenerateButton onClick={this.onClickGenerateButton}>
            Generate
          </GenerateButton>
        </GradientGeneratorContent>
      </GradientContainer>
    )
  }
}

export default GradientGenerator
