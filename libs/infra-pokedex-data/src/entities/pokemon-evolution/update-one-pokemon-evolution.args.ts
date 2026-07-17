import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonEvolutionUpdateInput } from './pokemon-evolution-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';

@ArgsType()
export class UpdateOnePokemonEvolutionArgs {

    @Field(() => PokemonEvolutionUpdateInput, {nullable:false})
    @Type(() => PokemonEvolutionUpdateInput)
    data!: PokemonEvolutionUpdateInput;

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:false})
    @Type(() => PokemonEvolutionWhereUniqueInput)
    where!: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;
}
