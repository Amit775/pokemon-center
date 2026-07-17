import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsUpdateWithoutHeldItemsInput } from './items-update-without-held-items.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutHeldItemsInput } from './items-create-without-held-items.input';
import { ItemsWhereInput } from './items-where.input';

@InputType()
export class ItemsUpsertWithoutHeldItemsInput {

    @Field(() => ItemsUpdateWithoutHeldItemsInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutHeldItemsInput)
    update!: Identity<ItemsUpdateWithoutHeldItemsInput>;

    @Field(() => ItemsCreateWithoutHeldItemsInput, {nullable:false})
    @Type(() => ItemsCreateWithoutHeldItemsInput)
    create!: Identity<ItemsCreateWithoutHeldItemsInput>;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: Identity<ItemsWhereInput>;
}
