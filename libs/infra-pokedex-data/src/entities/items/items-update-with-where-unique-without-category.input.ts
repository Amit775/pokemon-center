import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { ItemsUpdateWithoutCategoryInput } from './items-update-without-category.input';

@InputType()
export class ItemsUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutCategoryInput)
    data!: ItemsUpdateWithoutCategoryInput;
}
