import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonSpeciesCreateWithoutEvolvesToInput } from './pokemon-species-create-without-evolves-to.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutEvolvesToInput } from './pokemon-species-create-or-connect-without-evolves-to.input';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class PokemonSpeciesCreateNestedOneWithoutEvolvesToInput {

    @Field(() => PokemonSpeciesCreateWithoutEvolvesToInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutEvolvesToInput)
    create?: Identity<PokemonSpeciesCreateWithoutEvolvesToInput>;

    @Field(() => PokemonSpeciesCreateOrConnectWithoutEvolvesToInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutEvolvesToInput)
    connectOrCreate?: Identity<PokemonSpeciesCreateOrConnectWithoutEvolvesToInput>;

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;
}
