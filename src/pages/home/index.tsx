import { Heading, Text } from "@ignite-ui/react";
import { Hero, HomeContainer, Preview } from "./styles";
import { NextSeo } from "next-seo";
import previewImage from "../../assets/app-preview.png";
import Image from "next/image";
import { ClaimUsernameForm } from "./components/ClaimUsernameForm";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre"
      />

      <HomeContainer>
        <Hero>
          <Heading as="h1" size="4xl">
            Agendamento descomplicado
          </Heading>
          <Text size="xl">
            Conecte seu calendario e permita que as pessoas marquem agendamentos
            no seu tempo livre
          </Text>
          <ClaimUsernameForm />
        </Hero>

        <Preview>
          <Image
            src={previewImage}
            height={400}
            quality={100}
            priority
            alt="Calendario simbolizando aplicação em funcionamento"
          />
        </Preview>
      </HomeContainer>
    </>
  );
}
