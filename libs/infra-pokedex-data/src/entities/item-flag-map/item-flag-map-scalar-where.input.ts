import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class ItemFlagMapScalarWhereInput {

    @Field(() => [ItemFlagMapScalarWhereInput], {nullable:true})
    AND?: Array<ItemFlagMapScalarWhereInput>;

    @Field(() => [ItemFlagMapScalarWhereInput], {nullable:true})
    OR?: Array<ItemFlagMapScalarWhereInput>;

    @Field(() => [ItemFlagMapScalarWhereInput], {nullable:true})
    NOT?: Array<ItemFlagMapScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    item_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    item_flag_id?: IntFilter;
}
