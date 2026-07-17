import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonEvolutionUpdateWithoutEvolutionTriggerInput } from './pokemon-evolution-update-without-evolution-trigger.input';
import { PokemonEvolutionCreateWithoutEvolutionTriggerInput } from './pokemon-evolution-create-without-evolution-trigger.input';

@InputType()
export class PokemonEvolutionUpsertWithWhereUniqueWithoutEvolutionTriggerInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionUpdateWithoutEvolutionTriggerInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateWithoutEvolutionTriggerInput)
    update!: Identity<PokemonEvolutionUpdateWithoutEvolutionTriggerInput>;

    @Field(() => PokemonEvolutionCreateWithoutEvolutionTriggerInput, {nullable:false})
    @Type(() => PokemonEvolutionCreateWithoutEvolutionTriggerInput)
    create!: Identity<PokemonEvolutionCreateWithoutEvolutionTriggerInput>;
}
