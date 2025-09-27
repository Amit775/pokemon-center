import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { MoveMeta } from '../move-meta/move-meta.model';
import { MoveMetaAilmentsCount } from './move-meta-ailments-count.output';

/**
 * @@TypeGraphQL.type(name: "MoveMetaAilment")
 */
@ObjectType({description:'@@TypeGraphQL.type(name: "MoveMetaAilment")'})
export class MoveMetaAilments {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    identifier!: string;

    @Field(() => [MoveMeta], {nullable:true})
    meta?: Array<MoveMeta>;

    @Field(() => MoveMetaAilmentsCount, {nullable:false})
    _count?: MoveMetaAilmentsCount;
}
