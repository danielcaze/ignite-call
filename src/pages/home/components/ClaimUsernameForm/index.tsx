import { Button, Text, TextInput } from '@ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Form, FormAnnotation } from './styles'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Usuário precisa ter pelo menos 3 letras.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Usuário pode ter apenas letras e hifens.',
    })
    .transform((username) => username.toLowerCase()),
})

type claimUsernameFormType = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<claimUsernameFormType>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  async function handleClaimUsername({ username }: claimUsernameFormType) { }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com/"
          placeholder="seu-usuário"
          {...register('username')}
        />
        <Button size="sm" type="submit">
          Reservar
          <ArrowRight />
        </Button>
      </Form>
      <FormAnnotation>
        <Text size="sm">
          {errors.username?.message ?? 'Digite o nome do usuário desejado.'}
        </Text>
      </FormAnnotation>
    </>
  )
}
