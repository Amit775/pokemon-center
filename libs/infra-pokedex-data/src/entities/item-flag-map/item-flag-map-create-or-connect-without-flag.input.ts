import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemFlagMapWhereUniqueInput } from './item-flag-map-where-unique.input';
import { Type } from 'class-transformer';
import { ItemFlagMapCreateWithoutFlagInput } from './item-flag-map-create-without-flag.input';

@InputType()
export class ItemFlagMapCreateOrConnectWithoutFlagInput {

    @Field(() => ItemFlagMapWhereUniqueInput, {nullable:false})
    @Type(() => ItemFlagMapWhereUniqueInput)
    where!: Prisma.AtLeast<ItemFlagMapWhereUniqueInput, 'item_id'>;

    @Field(() => ItemFlagMapCreateWithoutFlagInput, {nullable:false})
    @Type(() => ItemFlagMapCreateWithoutFlagInput)
    create!: ItemFlagMapCreateWithoutFlagInput;
}
