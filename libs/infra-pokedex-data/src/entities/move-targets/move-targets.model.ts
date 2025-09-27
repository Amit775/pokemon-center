import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Moves } from '../moves/moves.model';
import { MoveTargetsCount } from './move-targets-count.output';

/**
 * @@TypeGraphQL.type(name: "MoveTarget")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "MoveTarget")'})
export class MoveTargets {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [Moves], {nullable:true})
    moves?: Array<Moves>;

    @Field(() => MoveTargetsCount, {nullable:false})
    _count?: MoveTargetsCount;
}
