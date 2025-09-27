import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PokedexVersionGroupsWhereInput } from './pokedex-version-groups-where.input';
import { Type } from 'class-transformer';
import { PokedexVersionGroupsOrderByWithRelationInput } from './pokedex-version-groups-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PokedexVersionGroupsWhereUniqueInput } from './pokedex-version-groups-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PokedexVersionGroupsScalarFieldEnum } from './pokedex-version-groups-scalar-field.enum';

@ArgsType()
export class FindFirstPokedexVersionGroupsArgs {

    @Field(() => PokedexVersionGroupsWhereInput, {nullable:true})
    @Type(() => PokedexVersionGroupsWhereInput)
    where?: PokedexVersionGroupsWhereInput;

    @Field(() => [PokedexVersionGroupsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PokedexVersionGroupsOrderByWithRelationInput>;

    @Field(() => PokedexVersionGroupsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PokedexVersionGroupsWhereUniqueInput, 'pokedex_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PokedexVersionGroupsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${PokedexVersionGroupsScalarFieldEnum}`>;
}
