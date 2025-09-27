import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Moves } from '../moves/moves.model';
import { MoveFlags } from '../move-flags/move-flags.model';

/**
 * @@TypeGraphQL.type(name: "MoveFlagMap")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "MoveFlagMap")'})
export class MoveFlagMap {

    @Field(() => ID, {nullable:false})
    move_id!: number;

    @Field(() => Int, {nullable:false})
    move_flag_id!: number;

    @Field(() => Moves, {nullable:false})
    move?: Moves;

    @Field(() => MoveFlags, {nullable:false})
    flag?: MoveFlags;
}
