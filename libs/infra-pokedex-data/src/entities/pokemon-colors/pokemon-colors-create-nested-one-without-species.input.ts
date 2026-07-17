import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PokemonColorsCreateWithoutSpeciesInput } from './pokemon-colors-create-without-species.input';
import { Type } from 'class-transformer';
import { PokemonColorsCreateOrConnectWithoutSpeciesInput } from './pokemon-colors-create-or-connect-without-species.input';
import { Prisma } from '@prisma/client';
import { PokemonColorsWhereUniqueInput } from './pokemon-colors-where-unique.input';

@InputType()
export class PokemonColorsCreateNestedOneWithoutSpeciesInput {

    @Field(() => PokemonColorsCreateWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonColorsCreateWithoutSpeciesInput)
    create?: PokemonColorsCreateWithoutSpeciesInput;

    @Field(() => PokemonColorsCreateOrConnectWithoutSpeciesInput, {nullable:true})
    @Type(() => PokemonColorsCreateOrConnectWithoutSpeciesInput)
    connectOrCreate?: PokemonColorsCreateOrConnectWithoutSpeciesInput;

    @Field(() => PokemonColorsWhereUniqueInput, {nullable:true})
    @Type(() => PokemonColorsWhereUniqueInput)
    connect?: Prisma.AtLeast<PokemonColorsWhereUniqueInput, 'id'>;
}
