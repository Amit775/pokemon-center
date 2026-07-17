import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { ItemsCreateInput } from './items-create.input';
import { ItemsUpdateInput } from './items-update.input';

@ArgsType()
export class UpsertOneItemsArgs {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsCreateInput, {nullable:false})
    @Type(() => ItemsCreateInput)
    create!: ItemsCreateInput;

    @Field(() => ItemsUpdateInput, {nullable:false})
    @Type(() => ItemsUpdateInput)
    update!: ItemsUpdateInput;
}
