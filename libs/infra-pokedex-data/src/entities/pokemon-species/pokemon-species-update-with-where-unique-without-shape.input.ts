import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesUpdateWithoutShapeInput } from './pokemon-species-update-without-shape.input';

@InputType()
export class PokemonSpeciesUpdateWithWhereUniqueWithoutShapeInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesUpdateWithoutShapeInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutShapeInput)
    data!: PokemonSpeciesUpdateWithoutShapeInput;
}
