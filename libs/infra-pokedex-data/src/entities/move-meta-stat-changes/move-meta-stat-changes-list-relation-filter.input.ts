import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MoveMetaStatChangesWhereInput } from './move-meta-stat-changes-where.input';

@InputType()
export class MoveMetaStatChangesListRelationFilter {

    @Field(() => MoveMetaStatChangesWhereInput, {nullable:true})
    every?: MoveMetaStatChangesWhereInput;

    @Field(() => MoveMetaStatChangesWhereInput, {nullable:true})
    some?: MoveMetaStatChangesWhereInput;

    @Field(() => MoveMetaStatChangesWhereInput, {nullable:true})
    none?: MoveMetaStatChangesWhereInput;
}
