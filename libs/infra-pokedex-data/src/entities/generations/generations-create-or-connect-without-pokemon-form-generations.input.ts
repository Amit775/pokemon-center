import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { GenerationsCreateWithoutPokemonFormGenerationsInput } from './generations-create-without-pokemon-form-generations.input';

@InputType()
export class GenerationsCreateOrConnectWithoutPokemonFormGenerationsInput {

    @Field(() => GenerationsWhereUniqueInput, {nullable:false})
    @Type(() => GenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsCreateWithoutPokemonFormGenerationsInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutPokemonFormGenerationsInput)
    create!: Identity<GenerationsCreateWithoutPokemonFormGenerationsInput>;
}
