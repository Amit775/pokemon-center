import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Moves } from '../moves/moves.model';
import type { Identity } from 'identity-type';

/**
 * @@TypeGraphQL.type(name: "ContestCombo")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "ContestCombo")'})
export class ContestCombos {

    @Field(() => ID, {nullable:false})
    first_move_id!: number;

    @Field(() => Int, {nullable:false})
    second_move_id!: number;

    @Field(() => Moves, {nullable:false})
    firstMove?: Identity<Moves>;

    @Field(() => Moves, {nullable:false})
    secondMove?: Identity<Moves>;
}
