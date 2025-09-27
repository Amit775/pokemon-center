import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
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
    move_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    stat_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    change?: IntFilter;
}
