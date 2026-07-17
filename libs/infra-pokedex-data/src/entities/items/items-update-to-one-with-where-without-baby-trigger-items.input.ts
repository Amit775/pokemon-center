import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsWhereInput } from './items-where.input';
import { Type } from 'class-transformer';
import { ItemsUpdateWithoutBabyTriggerItemsInput } from './items-update-without-baby-trigger-items.input';

@InputType()
export class ItemsUpdateToOneWithWhereWithoutBabyTriggerItemsInput {

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: Identity<ItemsWhereInput>;

    @Field(() => ItemsUpdateWithoutBabyTriggerItemsInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutBabyTriggerItemsInput)
    data!: Identity<ItemsUpdateWithoutBabyTriggerItemsInput>;
}
