import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MoveMetaStatChangesWhereInput } from './move-meta-stat-changes-where.input';

@InputType()
export class MoveMetaStatChangesListRelationFilter {

    @Field(() => MoveMetaStatChangesWhereInput, {nullable:true})
    every?: Identity<MoveMetaStatChangesWhereInput>;

    @Field(() => MoveMetaStatChangesWhereInput, {nullable:true})
    some?: Identity<MoveMetaStatChangesWhereInput>;

    @Field(() => MoveMetaStatChangesWhereInput, {nullable:true})
    none?: Identity<MoveMetaStatChangesWhereInput>;
}
