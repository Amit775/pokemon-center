import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutEggGroupsInput } from './pokemon-species-create-without-egg-groups.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutEggGroupsInput } from './pokemon-species-create-or-connect-without-egg-groups.input';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class PokemonSpeciesCreateNestedOneWithoutEggGroupsInput {

    @Field(() => PokemonSpeciesCreateWithoutEggGroupsInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutEggGroupsInput)
    create?: PokemonSpeciesCreateWithoutEggGroupsInput;

    @Field(() => PokemonSpeciesCreateOrConnectWithoutEggGroupsInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutEggGroupsInput)
    connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutEggGroupsInput;

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;
}
