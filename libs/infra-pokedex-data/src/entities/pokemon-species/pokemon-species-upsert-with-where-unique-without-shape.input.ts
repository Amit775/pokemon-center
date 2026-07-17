import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesUpdateWithoutShapeInput } from './pokemon-species-update-without-shape.input';
import { PokemonSpeciesCreateWithoutShapeInput } from './pokemon-species-create-without-shape.input';

@InputType()
export class PokemonSpeciesUpsertWithWhereUniqueWithoutShapeInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesUpdateWithoutShapeInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutShapeInput)
    update!: PokemonSpeciesUpdateWithoutShapeInput;

    @Field(() => PokemonSpeciesCreateWithoutShapeInput, {nullable:false})
    @Type(() => PokemonSpeciesCreateWithoutShapeInput)
    create!: PokemonSpeciesCreateWithoutShapeInput;
}
