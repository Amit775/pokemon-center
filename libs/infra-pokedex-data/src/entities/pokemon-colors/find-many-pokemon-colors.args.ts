import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonColorsWhereInput } from './pokemon-colors-where.input';
import { Type } from 'class-transformer';
import { PokemonColorsOrderByWithRelationInput } from './pokemon-colors-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonColorsWhereUniqueInput } from './pokemon-colors-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonColorsScalarFieldEnum } from './pokemon-colors-scalar-field.enum';

@ArgsType()
export class FindManyPokemonColorsArgs {

    @Field(() => PokemonColorsWhereInput, {nullable:true})
    @Type(() => PokemonColorsWhereInput)
    where?: PokemonColorsWhereInput;

    @Field(() => [PokemonColorsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonColorsOrderByWithRelationInput>;

    @Field(() => PokemonColorsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonColorsWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PokemonColorsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PokemonColorsScalarFieldEnum}`>;
}
