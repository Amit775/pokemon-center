import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlagsUpdateWithoutFlagMapInput } from './item-flags-update-without-flag-map.input';
import { Type } from 'class-transformer';
import { ItemFlagsCreateWithoutFlagMapInput } from './item-flags-create-without-flag-map.input';
import { ItemFlagsWhereInput } from './item-flags-where.input';

@InputType()
export class ItemFlagsUpsertWithoutFlagMapInput {

    @Field(() => ItemFlagsUpdateWithoutFlagMapInput, {nullable:false})
    @Type(() => ItemFlagsUpdateWithoutFlagMapInput)
    update!: Identity<ItemFlagsUpdateWithoutFlagMapInput>;

    @Field(() => ItemFlagsCreateWithoutFlagMapInput, {nullable:false})
    @Type(() => ItemFlagsCreateWithoutFlagMapInput)
    create!: Identity<ItemFlagsCreateWithoutFlagMapInput>;

    @Field(() => ItemFlagsWhereInput, {nullable:true})
    @Type(() => ItemFlagsWhereInput)
    where?: Identity<ItemFlagsWhereInput>;
}
