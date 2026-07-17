import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemFlagsWhereUniqueInput } from './item-flags-where-unique.input';
import { Type } from 'class-transformer';
import { ItemFlagsCreateWithoutFlagMapInput } from './item-flags-create-without-flag-map.input';

@InputType()
export class ItemFlagsCreateOrConnectWithoutFlagMapInput {

    @Field(() => ItemFlagsWhereUniqueInput, {nullable:false})
    @Type(() => ItemFlagsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemFlagsWhereUniqueInput, 'id'>;

    @Field(() => ItemFlagsCreateWithoutFlagMapInput, {nullable:false})
    @Type(() => ItemFlagsCreateWithoutFlagMapInput)
    create!: ItemFlagsCreateWithoutFlagMapInput;
}
