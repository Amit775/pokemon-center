import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonEvolutionUpdateWithoutHeldItemInput } from './pokemon-evolution-update-without-held-item.input';
import { PokemonEvolutionCreateWithoutHeldItemInput } from './pokemon-evolution-create-without-held-item.input';

@InputType()
export class PokemonEvolutionUpsertWithWhereUniqueWithoutHeldItemInput {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionUpdateWithoutHeldItemInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateWithoutHeldItemInput)
    update!: Identity<PokemonEvolutionUpdateWithoutHeldItemInput>;

    @Field(() => PokemonEvolutionCreateWithoutHeldItemInput, {nullable:false})
    @Type(() => PokemonEvolutionCreateWithoutHeldItemInput)
    create!: Identity<PokemonEvolutionCreateWithoutHeldItemInput>;
}
