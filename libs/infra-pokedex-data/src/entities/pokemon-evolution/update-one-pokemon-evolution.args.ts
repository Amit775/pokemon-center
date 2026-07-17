import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { PokemonEvolutionUpdateInput } from './pokemon-evolution-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';

@ArgsType()
export class UpdateOnePokemonEvolutionArgs {

    @Field(() => PokemonEvolutionUpdateInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateInput)
    data!: Identity<PokemonEvolutionUpdateInput>;

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;
}
