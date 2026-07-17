import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonSpeciesWhereUniqueInput } from './pokemon-species-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonSpeciesUpdateWithoutColorInput } from './pokemon-species-update-without-color.input';

@InputType()
export class PokemonSpeciesUpdateWithWhereUniqueWithoutColorInput {

    @Field(() => PokemonSpeciesWhereUniqueInput, {nullable:false})
    @Type(() => PokemonSpeciesWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonSpeciesWhereUniqueInput, 'id'>;

    @Field(() => PokemonSpeciesUpdateWithoutColorInput, {nullable:false})
    @Type(() => PokemonSpeciesUpdateWithoutColorInput)
    data!: PokemonSpeciesUpdateWithoutColorInput;
}
