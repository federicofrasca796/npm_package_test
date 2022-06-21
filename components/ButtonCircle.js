import { Pressable } from "react-native";


const ButtonCircle = ({ onPress }) => {

    const handlePress = e => {
        onPress(e)
    }
    return (
        <Pressable
            onPress={handlePress}
        >
            Button Custom
        </Pressable>
    )
}

export default ButtonCircle