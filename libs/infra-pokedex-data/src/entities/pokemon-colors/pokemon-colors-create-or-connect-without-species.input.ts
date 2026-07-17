import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonColorsWhereUniqueInput } from './pokemon-colors-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonColorsCreateWithoutSpeciesInput } from './pokemon-colors-create-without-species.input';

@InputType()
export class PokemonColorsCreateOrConnectWithoutSpeciesInput {

    @Field(() => PokemonColorsWhereUniqueInput, {nullable:false})
    @Type(() => PokemonColorsWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonColorsWhereUniqueInput, 'id'>;

    @Field(() => PokemonColorsCreateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonColorsCreateWithoutSpeciesInput)
    create!: Identity<PokemonColorsCreateWithoutSpeciesInput>;
}
