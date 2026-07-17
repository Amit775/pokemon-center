import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionUpdateWithoutPartyTypeInput } from './pokemon-evolution-update-without-party-type.input';
import { PokemonEvolutionCreateWithoutPartyTypeInput } from './pokemon-evolution-create-without-party-type.input';

@InputType()
export class PokemonEvolutionUpsertWithWhereUniqueWithoutPartyTypeInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionUpdateWithoutPartyTypeInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateWithoutPartyTypeInput)
    update!: PokemonEvolutionUpdateWithoutPartyTypeInput;

    @Field(() => PokemonEvolutionCreateWithoutPartyTypeInput, {nullable:false})
    @Type(() => PokemonEvolutionCreateWithoutPartyTypeInput)
    create!: PokemonEvolutionCreateWithoutPartyTypeInput;
}
