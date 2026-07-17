import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsUpdateWithoutBabyTriggerItemsInput } from './items-update-without-baby-trigger-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutBabyTriggerItemsInput } from './items-create-without-baby-trigger-items.input';
import { ItemsWhereInput } from './items-where.input';

@InputType()
export class ItemsUpsertWithoutBabyTriggerItemsInput {

    @Field(() => ItemsUpdateWithoutBabyTriggerItemsInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutBabyTriggerItemsInput)
    update!: ItemsUpdateWithoutBabyTriggerItemsInput;

    @Field(() => ItemsCreateWithoutBabyTriggerItemsInput, {nullable:false})
    @Type(() => ItemsCreateWithoutBabyTriggerItemsInput)
    create!: ItemsCreateWithoutBabyTriggerItemsInput;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: ItemsWhereInput;
}
