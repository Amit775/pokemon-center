import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Moves } from '../moves/moves.model';
import { Types } from '../types/types.model';
import { MoveDamageClassesCount } from './move-damage-classes-count.output';

/**
 * @@TypeGraphQL.type(name: "MoveDamageClass")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "MoveDamageClass")'})
export class MoveDamageClasses {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [Moves], {nullable:true})
    moves?: Array<Moves>;

    @Field(() => [Types], {nullable:true})
    types?: Array<Types>;

    @Field(() => MoveDamageClassesCount, {nullable:false})
    _count?: MoveDamageClassesCount;
}
