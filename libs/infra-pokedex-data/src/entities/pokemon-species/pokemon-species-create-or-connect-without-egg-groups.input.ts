import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateWithoutEggGroupsInput } from './pokemon-species-create-without-egg-groups.input';

@InputType()
export class PokemonSpeciesCreateOrConnectWithoutEggGroupsInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesCreateWithoutEggGroupsInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutEggGroupsInput)
    create!: PokemonSpeciesCreateWithoutEggGroupsInput;
}
