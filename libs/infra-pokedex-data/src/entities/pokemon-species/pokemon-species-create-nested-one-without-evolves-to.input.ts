import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonSpeciesCreateWithoutEvolvesToInput } from './pokemon-species-create-without-evolves-to.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesCreateOrConnectWithoutEvolvesToInput } from './pokemon-species-create-or-connect-without-evolves-to.input';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';

@InputType()
export class PokemonSpeciesCreateNestedOneWithoutEvolvesToInput {

    @Field(() => PokemonSpeciesCreateWithoutEvolvesToInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateWithoutEvolvesToInput)
    create?: PokemonSpeciesCreateWithoutEvolvesToInput;

    @Field(() => PokemonSpeciesCreateOrConnectWithoutEvolvesToInput, {nullable:true})
    @Type(() => PokemonSpeciesCreateOrConnectWithoutEvolvesToInput)
    connectOrCreate?: PokemonSpeciesCreateOrConnectWithoutEvolvesToInput;

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:true})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;
}
