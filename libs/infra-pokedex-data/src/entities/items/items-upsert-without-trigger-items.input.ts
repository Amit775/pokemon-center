import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsUpdateWithoutTriggerItemsInput } from './items-update-without-trigger-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutTriggerItemsInput } from './items-create-without-trigger-items.input';
import { ItemsWhereInput } from './items-where.input';

@InputType()
export class ItemsUpsertWithoutTriggerItemsInput {

    @Field(() => ItemsUpdateWithoutTriggerItemsInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutTriggerItemsInput)
    update!: Identity<ItemsUpdateWithoutTriggerItemsInput>;

    @Field(() => ItemsCreateWithoutTriggerItemsInput, {nullable:false})
    @Type(() => ItemsCreateWithoutTriggerItemsInput)
    create!: Identity<ItemsCreateWithoutTriggerItemsInput>;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: Identity<ItemsWhereInput>;
}
