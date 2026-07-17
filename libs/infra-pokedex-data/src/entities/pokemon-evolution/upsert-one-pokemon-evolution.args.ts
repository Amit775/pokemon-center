import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { PokemonEvolutionCreateInput } from './pokemon-evolution-create.input';
import { PokemonEvolutionUpdateInput } from './pokemon-evolution-update.input';

@ArgsType()
export class UpsertOnePokemonEvolutionArgs {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionCreateInput, {nullable:false})
    @Type(() => PokemonEvolutionCreateInput)
    create!: Identity<PokemonEvolutionCreateInput>;

    @Field(() => PokemonEvolutionUpdateInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateInput)
    update!: Identity<PokemonEvolutionUpdateInput>;
}
