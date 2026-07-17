import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionCreateInput } from './pokemon-evolution-create.input';
import { PokemonEvolutionUpdateInput } from './pokemon-evolution-update.input';

@ArgsType()
export class UpsertOnePokemonEvolutionArgs {

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => PokemonEvolutionCreateInput, {nullable:false})
    @Type(() => PokemonEvolutionCreateInput)
    create!: PokemonEvolutionCreateInput;

    @Field(() => PokemonEvolutionUpdateInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateInput)
    update!: PokemonEvolutionUpdateInput;
}
