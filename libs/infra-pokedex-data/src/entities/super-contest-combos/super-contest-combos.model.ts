import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Moves } from '../moves/moves.model';

/**
 * @@TypeGraphQL.type(name: "SuperContestCombo")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "SuperContestCombo")'})
export class SuperContestCombos {

    @Field(() => ID, {nullable:false})
    first_move_id!: number;

    @Field(() => Int, {nullable:false})
    second_move_id!: number;

    @Field(() => Moves, {nullable:false})
    firstMove?: Moves;

    @Field(() => Moves, {nullable:false})
    secondMove?: Moves;
}
