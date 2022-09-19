import { useToast, Wrap, WrapItem, Button } from "@chakra-ui/react";

export function PositionExample() {
  const toast = useToast();
  const positions = ["top-bottom"];

  return (
    <>
      <Wrap>
        {positions.map((position, i) => (
          <WrapItem key={i}>
            <Button
              style={{
                backgroundColor: "#2155CD",
                color: "yellow",
                margin: "10px",
              }}
              onClick={() =>
                toast({
                  title: `Gracias por tu visita 🍺`,
                  isClosable: true,
                })
              }
            >
              ❤️
            </Button>
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
}
