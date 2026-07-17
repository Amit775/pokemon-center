import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { GenerationsWhereUniqueInput } from './generations-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { GenerationsCreateWithoutPokemonSpeciesInput } from './generations-create-without-pokemon-species.input';

@InputType()
export class GenerationsCreateOrConnectWithoutPokemonSpeciesInput {

    @Field(() => GenerationsWhereUniqueInput, {nullable:false})
    @Type(() => GenerationsWhereUniqueInput)
    where!: Prisma.AtLeast<GenerationsWhereUniqueInput, 'id'>;

    @Field(() => GenerationsCreateWithoutPokemonSpeciesInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutPokemonSpeciesInput)
    create!: Identity<GenerationsCreateWithoutPokemonSpeciesInput>;
}
