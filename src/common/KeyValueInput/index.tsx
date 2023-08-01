import { Button, Input, InputGroup } from '@chakra-ui/react'
import { INameValue } from '@/types';

interface IKeyValueInput {
  nameValue: INameValue,
  index: number,
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>, place: number) => void;
  handleAddNewField: () => void;
  handleRemoveField: (id: number) => void;
}

const KeyValueInput = ({ nameValue, index, handleInputChange, handleAddNewField, handleRemoveField }: IKeyValueInput) => {
  return (
    <InputGroup gap={4} mb={4} alignItems={"center"}>
      <Input
        name="key"
        placeholder='Enter key'
        value={nameValue?.key}
        onChange={(e) => handleInputChange(e, index)}
      />
      <Input
        name="value"
        placeholder='Enter value'
        value={nameValue?.value}
        onChange={(e) => handleInputChange(e, index)}
      />
      {
        index === 0 ?
          <Button
            bgColor="brand.500"
            size="sm"
            fontSize="sm"
            onClick={handleAddNewField}
          >
            +
          </Button> :
          <Button
            bgColor="red.400"
            size="sm"
            fontSize="sm"
            onClick={() => handleRemoveField(nameValue?.id)}
          >
            -
          </Button>

      }
    </InputGroup>
  )
}

export default KeyValueInput