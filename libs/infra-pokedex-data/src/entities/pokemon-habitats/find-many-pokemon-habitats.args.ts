import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonHabitatsWhereInput } from './pokemon-habitats-where.input';
import { Type } from 'class-transformer';
import { PokemonHabitatsOrderByWithRelationInput } from './pokemon-habitats-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonHabitatsWhereUniqueInput } from './pokemon-habitats-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonHabitatsScalarFieldEnum } from './pokemon-habitats-scalar-field.enum';

@ArgsType()
export class FindManyPokemonHabitatsArgs {

    @Field(() => PokemonHabitatsWhereInput, {nullable:true})
    @Type(() => PokemonHabitatsWhereInput)
    where?: PokemonHabitatsWhereInput;

    @Field(() => [PokemonHabitatsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonHabitatsOrderByWithRelationInput>;

    @Field(() => PokemonHabitatsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonHabitatsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PokemonHabitatsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PokemonHabitatsScalarFieldEnum}`>;
}
