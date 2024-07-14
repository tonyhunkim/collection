import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import image from "./image.svg";
import classes from "./HeroBullets.module.css";

export function HeroBullets() {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            A <span className={classes.highlight}>study tool</span> for Frontend
            Engineering
          </Title>
          <Text c="dimmed" mt="md">
            Study Frontend Engineering concepts
          </Text>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck
                  style={{ width: rem(12), height: rem(12) }}
                  stroke={1.5}
                />
              </ThemeIcon>
            }
          >
            <h2>
              <b>Basics</b>
            </h2>
            <List.Item>
              <b>Typescript</b> – focus ring will appear only when user
              navigates with keyboard
            </List.Item>
            <List.Item>
              <b>Javascript</b> – focus ring will appear only when user
              navigates with keyboard
            </List.Item>
            <br />
            <h2>
              <b>React Specific Topics</b>
            </h2>
            <List.Item>
              <b>React Router</b> – build type safe applications, all components
              and hooks export types
            </List.Item>
            <List.Item>
              <b>useReducer</b> – all packages have MIT license, you can use
              Mantine in any project
            </List.Item>
            <List.Item>
              <b>Memoization</b> – all packages have MIT license, you can use
              Mantine in any project
            </List.Item>
            <List.Item>
              <b>useEffect </b> – all packages have MIT license, you can use
              Mantine in any project
            </List.Item>
            <br />
            <h2>
              <b>Misc.</b>
            </h2>
            <List.Item>
              <b>Quiz Questions</b> – all packages have MIT license, you can use
              Mantine in any project
            </List.Item>
            <List.Item>
              <b>Company Questions</b> – all packages have MIT license, you can
              use Mantine in any project
            </List.Item>
            <List.Item>
              <b>STAR Interview Method</b> – all packages have MIT license, you
              can use Mantine in any project
            </List.Item>
          </List>

          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Get started
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
            >
              Source code
            </Button>
          </Group>
        </div>
        {/* <Image src={image.src} className={classes.image} /> */}
      </div>
    </Container>
  );
}
