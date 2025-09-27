import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokemonItemsWhereInput } from './pokemon-items-where.input';
import { Type } from 'class-transformer';
import { PokemonItemsOrderByWithRelationInput } from './pokemon-items-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokemonItemsWhereUniqueInput } from './pokemon-items-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokemonItemsScalarFieldEnum } from './pokemon-items-scalar-field.enum';

@ArgsType()
export class FindManyPokemonItemsArgs {

    @Field(() => PokemonItemsWhereInput, {nullable:true})
    @Type(() => PokemonItemsWhereInput)
    where?: PokemonItemsWhereInput;

    @Field(() => [PokemonItemsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokemonItemsOrderByWithRelationInput>;

    @Field(() => PokemonItemsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokemonItemsWhereUniqueInput, 'pokemon_id_version_id_item_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PokemonItemsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PokemonItemsScalarFieldEnum}`>;
}
