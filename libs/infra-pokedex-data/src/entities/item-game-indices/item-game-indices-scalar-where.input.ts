import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class ItemGameIndicesScalarWhereInput {

    @Field(() => [ItemGameIndicesScalarWhereInput], {nullable:true})
    AND?: Array<ItemGameIndicesScalarWhereInput>;

    @Field(() => [ItemGameIndicesScalarWhereInput], {nullable:true})
    OR?: Array<ItemGameIndicesScalarWhereInput>;

    @Field(() => [ItemGameIndicesScalarWhereInput], {nullable:true})
    NOT?: Array<ItemGameIndicesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    item_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    game_index?: IntFilter;
}
