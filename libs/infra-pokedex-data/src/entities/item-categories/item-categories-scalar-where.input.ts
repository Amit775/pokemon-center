import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ItemCategoriesScalarWhereInput {

    @Field(() => [ItemCategoriesScalarWhereInput], {nullable:true})
    AND?: Array<ItemCategoriesScalarWhereInput>;

    @Field(() => [ItemCategoriesScalarWhereInput], {nullable:true})
    OR?: Array<ItemCategoriesScalarWhereInput>;

    @Field(() => [ItemCategoriesScalarWhereInput], {nullable:true})
    NOT?: Array<ItemCategoriesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: Identity<IntFilter>;

    @Field(() => IntFilter, {nullable:true})
    pocket_id?: Identity<IntFilter>;

    @Field(() => StringFilter, {nullable:true})
    identifier?: Identity<StringFilter>;
}
