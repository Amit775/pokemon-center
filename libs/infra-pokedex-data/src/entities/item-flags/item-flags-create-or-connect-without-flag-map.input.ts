import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemFlagsWhereUniqueInput } from './item-flags-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemFlagsCreateWithoutFlagMapInput } from './item-flags-create-without-flag-map.input';

@InputType()
export class ItemFlagsCreateOrConnectWithoutFlagMapInput {

    @Field(() => ItemFlagsWhereUniqueInput, {nullable:false})
    @Type(() => ItemFlagsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemFlagsWhereUniqueInput, 'id'>;

    @Field(() => ItemFlagsCreateWithoutFlagMapInput, {nullable:false})
    @Type(() => ItemFlagsCreateWithoutFlagMapInput)
    create!: Identity<ItemFlagsCreateWithoutFlagMapInput>;
}
