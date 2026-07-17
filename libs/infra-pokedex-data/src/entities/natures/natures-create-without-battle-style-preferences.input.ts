import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { StatsCreateNestedOneWithoutNaturesDecreasedInput } from '../stats/stats-create-nested-one-without-natures-decreased.input';
import { StatsCreateNestedOneWithoutNaturesIncreasedInput } from '../stats/stats-create-nested-one-without-natures-increased.input';

@InputType()
export class NaturesCreateWithoutBattleStylePreferencesInput {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    hates_flavor_id!: number;

    @Field(() => Int, {nullable:false})
    likes_flavor_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => StatsCreateNestedOneWithoutNaturesDecreasedInput, {nullable:false})
    decreasedStat!: Identity<StatsCreateNestedOneWithoutNaturesDecreasedInput>;

    @Field(() => StatsCreateNestedOneWithoutNaturesIncreasedInput, {nullable:false})
    increasedStat!: Identity<StatsCreateNestedOneWithoutNaturesIncreasedInput>;
}
