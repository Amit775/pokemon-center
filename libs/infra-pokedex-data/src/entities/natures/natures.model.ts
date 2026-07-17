import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Stats } from '../stats/stats.model';
import type { Identity } from 'identity-type';
import { NatureBattleStylePreferences } from '../nature-battle-style-preferences/nature-battle-style-preferences.model';
import { NaturesCount } from './natures-count.output';

/**
 * @@TypeGraphQL.type(name: "Nature")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "Nature")'})
export class Natures {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => Int, {nullable:false})
    decreased_stat_id!: number;

    @Field(() => Int, {nullable:false})
    increased_stat_id!: number;

    @Field(() => Int, {nullable:false})
    hates_flavor_id!: number;

    @Field(() => Int, {nullable:false})
    likes_flavor_id!: number;

    @Field(() => Int, {nullable:false})
    game_index!: number;

    @Field(() => Stats, {nullable:false})
    decreasedStat?: Identity<Stats>;

    @Field(() => Stats, {nullable:false})
    increasedStat?: Identity<Stats>;

    @Field(() => [NatureBattleStylePreferences], {nullable:false})
    battleStylePreferences?: Array<NatureBattleStylePreferences>;

    @Field(() => NaturesCount, {nullable:false})
    _count?: Identity<NaturesCount>;
}
