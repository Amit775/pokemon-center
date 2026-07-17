import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemFlagsUpdateWithoutFlagMapInput } from './item-flags-update-without-flag-map.input';
import { Type } from 'class-transformer';
import { ItemFlagsCreateWithoutFlagMapInput } from './item-flags-create-without-flag-map.input';
import { ItemFlagsWhereInput } from './item-flags-where.input';

@InputType()
export class ItemFlagsUpsertWithoutFlagMapInput {

    @Field(() => ItemFlagsUpdateWithoutFlagMapInput, {nullable:false})
    @Type(() => ItemFlagsUpdateWithoutFlagMapInput)
    update!: ItemFlagsUpdateWithoutFlagMapInput;

    @Field(() => ItemFlagsCreateWithoutFlagMapInput, {nullable:false})
    @Type(() => ItemFlagsCreateWithoutFlagMapInput)
    create!: ItemFlagsCreateWithoutFlagMapInput;

    @Field(() => ItemFlagsWhereInput, {nullable:true})
    @Type(() => ItemFlagsWhereInput)
    where?: ItemFlagsWhereInput;
}
