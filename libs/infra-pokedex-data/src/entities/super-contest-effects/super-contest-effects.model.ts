import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Moves } from '../moves/moves.model';
import { SuperContestEffectsCount } from './super-contest-effects-count.output';

/**
 * @@TypeGraphQL.type(name: "SuperContestEffect")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "SuperContestEffect")'})
export class SuperContestEffects {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    appeal!: number;

    @Field(() => [Moves], {nullable:true})
    moves?: Array<Moves>;

    @Field(() => SuperContestEffectsCount, {nullable:false})
    _count?: SuperContestEffectsCount;
}
