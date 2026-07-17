import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Moves } from '../moves/moves.model';
import { ContestEffectsCount } from './contest-effects-count.output';
import type { Identity } from 'identity-type';

/**
 * @@TypeGraphQL.type(name: "ContestEffect")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "ContestEffect")'})
export class ContestEffects {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    appeal!: number;

    @Field(() => Int, {nullable:false})
    jam!: number;

    @Field(() => [Moves], {nullable:false})
    moves?: Array<Moves>;

    @Field(() => ContestEffectsCount, {nullable:false})
    _count?: Identity<ContestEffectsCount>;
}
