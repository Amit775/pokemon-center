import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonShapesWhereInput } from './pokemon-shapes-where.input';
import { Type } from 'class-transformer';
import { PokemonShapesOrderByWithRelationInput } from './pokemon-shapes-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonShapesWhereUniqueInput } from './pokemon-shapes-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonShapesScalarFieldEnum } from './pokemon-shapes-scalar-field.enum';

@ArgsType()
export class FindManyPokemonShapesArgs {

    @Field(() => PokemonShapesWhereInput, {nullable:true})
    @Type(() => PokemonShapesWhereInput)
    where?: PokemonShapesWhereInput;

    @Field(() => [PokemonShapesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonShapesOrderByWithRelationInput>;

    @Field(() => PokemonShapesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonShapesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PokemonShapesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PokemonShapesScalarFieldEnum}`>;
}
