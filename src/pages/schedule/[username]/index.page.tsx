import { Avatar, Heading, Text } from "@ignite-ui/react";
import { NextSeo } from "next-seo";
import { Container, UserHeader } from "./styles";
import { GetStaticPaths, GetStaticProps } from "next";
import { prisma } from "@/lib/prisma";
import { ScheduleForm } from "./ScheduleForm";

type ScheduleProps = {
  user: {
    name: string;
    bio: string;
    avatarUrl: string;
  };
};

export default function Schedule({
  user: { avatarUrl, bio, name },
}: ScheduleProps) {
  return (
    <>
      <NextSeo title={`Agendar com ${name} | Ignite Call`} noindex />
      <Container>
        <UserHeader>
          <Avatar src={avatarUrl} />
          <Heading>{name}</Heading>
          <Text>{bio}</Text>
        </UserHeader>

        <ScheduleForm />
      </Container>
    </>
  );
}

// Quaado uma pagina e estatica e recebe um parametro dinamico, precisa criar essa funcao para na build gerar as paginas estaticas
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    // Vazio pois tenho varios usuarios e nao sei quais devo priorizar no momento da build
    paths: [],
    // fallback blocking para deixar acessar a pagina com paths fora do array acima
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const username = String(params?.username);

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  if (!user) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: {
        name: user.name,
        bio: user.bio,
        avatarUrl: user.avatar_url,
      },
    },
    revalidate: 60 * 60 * 24, // 1 day
  };
};
