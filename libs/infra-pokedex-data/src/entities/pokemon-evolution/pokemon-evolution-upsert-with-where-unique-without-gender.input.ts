import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionUpdateWithoutGenderInput } from './pokemon-evolution-update-without-gender.input';
import { PokemonEvolutionCreateWithoutGenderInput } from './pokemon-evolution-create-without-gender.input';

@InputType()
export class PokemonEvolutionUpsertWithWhereUniqueWithoutGenderInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionUpdateWithoutGenderInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateWithoutGenderInput)
    update!: PokemonEvolutionUpdateWithoutGenderInput;

    @Field(() => PokemonEvolutionCreateWithoutGenderInput, {nullable:false})
    @Type(() => PokemonEvolutionCreateWithoutGenderInput)
    create!: PokemonEvolutionCreateWithoutGenderInput;
}
