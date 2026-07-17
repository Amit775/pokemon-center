import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsWhereInput } from './items-where.input';
import { Type } from 'class-transformer';
import { ItemsUpdateWithoutTriggerItemsInput } from './items-update-without-trigger-items.input';

@InputType()
export class ItemsUpdateToOneWithWhereWithoutTriggerItemsInput {

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: Identity<ItemsWhereInput>;

    @Field(() => ItemsUpdateWithoutTriggerItemsInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutTriggerItemsInput)
    data!: Identity<ItemsUpdateWithoutTriggerItemsInput>;
}
