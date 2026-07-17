import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonCreateWithoutSpeciesInput } from './pokemon-create-without-species.input';

@InputType()
export class PokemonCreateOrConnectWithoutSpeciesInput {

    @Field(() => PokemonWhereUniqueInput, {nullable:false})
    @Type(() => PokemonWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => PokemonCreateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonCreateWithoutSpeciesInput)
    create!: PokemonCreateWithoutSpeciesInput;
}
