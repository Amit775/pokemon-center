import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonWhereUniqueInput } from './pokemon-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonUpdateWithoutSpeciesInput } from './pokemon-update-without-species.input';

@InputType()
export class PokemonUpdateWithWhereUniqueWithoutSpeciesInput {

    @Field(() => PokemonWhereUniqueInput, {nullable:false})
    @Type(() => PokemonWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonWhereUniqueInput, 'id'>;

    @Field(() => PokemonUpdateWithoutSpeciesInput, {nullable:false})
    @Type(() => PokemonUpdateWithoutSpeciesInput)
    data!: PokemonUpdateWithoutSpeciesInput;
}
