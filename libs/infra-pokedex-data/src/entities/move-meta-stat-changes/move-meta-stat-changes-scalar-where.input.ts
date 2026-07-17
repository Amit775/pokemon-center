import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class MoveMetaStatChangesScalarWhereInput {

    @Field(() => [MoveMetaStatChangesScalarWhereInput], {nullable:true})
    AND?: Array<MoveMetaStatChangesScalarWhereInput>;

    @Field(() => [MoveMetaStatChangesScalarWhereInput], {nullable:true})
    OR?: Array<MoveMetaStatChangesScalarWhereInput>;

    @Field(() => [MoveMetaStatChangesScalarWhereInput], {nullable:true})
    NOT?: Array<MoveMetaStatChangesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    move_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    stat_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    change?: Identity<IntFilter>;
}
