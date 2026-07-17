import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MovesCount {

    @Field(() => Int, {nullable:false})
    pokemonMoves?: number;

    @Field(() => Int, {nullable:false})
    machines?: number;

    @Field(() => Int, {nullable:false})
    meta?: number;

    @Field(() => Int, {nullable:false})
    flagMap?: number;

    @Field(() => Int, {nullable:false})
    contestCombos?: number;

    @Field(() => Int, {nullable:false})
    contestCombosSecond?: number;

    @Field(() => Int, {nullable:false})
    superContestCombos?: number;

    @Field(() => Int, {nullable:false})
    superContestCombosSecond?: number;

    @Field(() => Int, {nullable:false})
    knownMoves?: number;
}
