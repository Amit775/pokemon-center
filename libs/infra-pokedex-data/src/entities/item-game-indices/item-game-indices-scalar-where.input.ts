import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
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
    item_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    generation_id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    game_index?: Identity<IntFilter>;
}
