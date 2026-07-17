import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemsCreateWithoutCategoryInput } from './items-create-without-category.input';

@InputType()
export class ItemsCreateOrConnectWithoutCategoryInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsCreateWithoutCategoryInput, {nullable:false})
    @Type(() => ItemsCreateWithoutCategoryInput)
    create!: Identity<ItemsCreateWithoutCategoryInput>;
}
