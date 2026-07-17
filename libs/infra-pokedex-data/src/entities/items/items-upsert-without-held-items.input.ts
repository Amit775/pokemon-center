import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsUpdateWithoutHeldItemsInput } from './items-update-without-held-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutHeldItemsInput } from './items-create-without-held-items.input';
import { ItemsWhereInput } from './items-where.input';

@InputType()
export class ItemsUpsertWithoutHeldItemsInput {

    @Field(() => ItemsUpdateWithoutHeldItemsInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutHeldItemsInput)
    update!: ItemsUpdateWithoutHeldItemsInput;

    @Field(() => ItemsCreateWithoutHeldItemsInput, {nullable:false})
    @Type(() => ItemsCreateWithoutHeldItemsInput)
    create!: ItemsCreateWithoutHeldItemsInput;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: ItemsWhereInput;
}
