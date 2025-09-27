import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { NatureBattleStylePreferences } from '../nature-battle-style-preferences/nature-battle-style-preferences.model';
import { MoveBattleStylesCount } from './move-battle-styles-count.output';

/**
 * @@TypeGraphQL.type(name: "MoveBattleStyle")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "MoveBattleStyle")'})
export class MoveBattleStyles {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [NatureBattleStylePreferences], {nullable:true})
    naturePreferences?: Array<NatureBattleStylePreferences>;

    @Field(() => MoveBattleStylesCount, {nullable:false})
    _count?: MoveBattleStylesCount;
}
