import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonEvolutionWhereInput } from './pokemon-evolution-where.input';
import { Type } from 'class-transformer';
import { PokemonEvolutionOrderByWithRelationInput } from './pokemon-evolution-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonEvolutionWhereUniqueInput } from './pokemon-evolution-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonEvolutionScalarFieldEnum } from './pokemon-evolution-scalar-field.enum';

@ArgsType()
export class FindManyPokemonEvolutionArgs {

    @Field(() => PokemonEvolutionWhereInput, {nullable:true})
    @Type(() => PokemonEvolutionWhereInput)
    where?: PokemonEvolutionWhereInput;

    @Field(() => [PokemonEvolutionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonEvolutionOrderByWithRelationInput>;

    @Field(() => PokemonEvolutionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonEvolutionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PokemonEvolutionScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PokemonEvolutionScalarFieldEnum}`>;
}
