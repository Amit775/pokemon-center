import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonMoveMethodsWhereInput } from './pokemon-move-methods-where.input';
import { Type } from 'class-transformer';
import { PokemonMoveMethodsOrderByWithRelationInput } from './pokemon-move-methods-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonMoveMethodsWhereUniqueInput } from './pokemon-move-methods-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonMoveMethodsScalarFieldEnum } from './pokemon-move-methods-scalar-field.enum';

@ArgsType()
export class FindManyPokemonMoveMethodsArgs {

    @Field(() => PokemonMoveMethodsWhereInput, {nullable:true})
    @Type(() => PokemonMoveMethodsWhereInput)
    where?: PokemonMoveMethodsWhereInput;

    @Field(() => [PokemonMoveMethodsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonMoveMethodsOrderByWithRelationInput>;

    @Field(() => PokemonMoveMethodsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonMoveMethodsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PokemonMoveMethodsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PokemonMoveMethodsScalarFieldEnum}`>;
}
