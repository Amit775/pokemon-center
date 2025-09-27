import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { VersionGroupPokemonMoveMethodsWhereInput } from './version-group-pokemon-move-methods-where.input';
import { Type } from 'class-transformer';
import { VersionGroupPokemonMoveMethodsOrderByWithRelationInput } from './version-group-pokemon-move-methods-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { VersionGroupPokemonMoveMethodsWhereUniqueInput } from './version-group-pokemon-move-methods-where-unique.input';
import { Int } from '@nestjs/graphql';
import { VersionGroupPokemonMoveMethodsCountAggregateInput } from './version-group-pokemon-move-methods-count-aggregate.input';
import { VersionGroupPokemonMoveMethodsAvgAggregateInput } from './version-group-pokemon-move-methods-avg-aggregate.input';
import { VersionGroupPokemonMoveMethodsSumAggregateInput } from './version-group-pokemon-move-methods-sum-aggregate.input';
import { VersionGroupPokemonMoveMethodsMinAggregateInput } from './version-group-pokemon-move-methods-min-aggregate.input';
import { VersionGroupPokemonMoveMethodsMaxAggregateInput } from './version-group-pokemon-move-methods-max-aggregate.input';

@ArgsType()
export class VersionGroupPokemonMoveMethodsAggregateArgs {

    @Field(() => VersionGroupPokemonMoveMethodsWhereInput, {nullable:true})
    @Type(() => VersionGroupPokemonMoveMethodsWhereInput)
    where?: VersionGroupPokemonMoveMethodsWhereInput;

    @Field(() => [VersionGroupPokemonMoveMethodsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<VersionGroupPokemonMoveMethodsOrderByWithRelationInput>;

    @Field(() => VersionGroupPokemonMoveMethodsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<VersionGroupPokemonMoveMethodsWhereUniqueInput, 'version_group_id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => VersionGroupPokemonMoveMethodsCountAggregateInput, {nullable:true})
    _count?: VersionGroupPokemonMoveMethodsCountAggregateInput;

    @Field(() => VersionGroupPokemonMoveMethodsAvgAggregateInput, {nullable:true})
    _avg?: VersionGroupPokemonMoveMethodsAvgAggregateInput;

    @Field(() => VersionGroupPokemonMoveMethodsSumAggregateInput, {nullable:true})
    _sum?: VersionGroupPokemonMoveMethodsSumAggregateInput;

    @Field(() => VersionGroupPokemonMoveMethodsMinAggregateInput, {nullable:true})
    _min?: VersionGroupPokemonMoveMethodsMinAggregateInput;

    @Field(() => VersionGroupPokemonMoveMethodsMaxAggregateInput, {nullable:true})
    _max?: VersionGroupPokemonMoveMethodsMaxAggregateInput;
}
