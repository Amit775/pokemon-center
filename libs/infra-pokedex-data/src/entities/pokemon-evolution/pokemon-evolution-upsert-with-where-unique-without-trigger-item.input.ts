import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonEvolutionUpdateWithoutTriggerItemInput } from './pokemon-evolution-update-without-trigger-item.input';
import { PokemonEvolutionCreateWithoutTriggerItemInput } from './pokemon-evolution-create-without-trigger-item.input';

@InputType()
export class PokemonEvolutionUpsertWithWhereUniqueWithoutTriggerItemInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionUpdateWithoutTriggerItemInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateWithoutTriggerItemInput)
    update!: Identity<PokemonEvolutionUpdateWithoutTriggerItemInput>;

    @Field(() => PokemonEvolutionCreateWithoutTriggerItemInput, {nullable:false})
    @Type(() => PokemonEvolutionCreateWithoutTriggerItemInput)
    create!: Identity<PokemonEvolutionCreateWithoutTriggerItemInput>;
}
