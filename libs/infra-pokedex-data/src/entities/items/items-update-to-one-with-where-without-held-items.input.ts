import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsWhereInput } from './items-where.input';
import { Type } from 'class-transformer';
import { ItemsUpdateWithoutHeldItemsInput } from './items-update-without-held-items.input';

@InputType()
export class ItemsUpdateToOneWithWhereWithoutHeldItemsInput {

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: Identity<ItemsWhereInput>;

    @Field(() => ItemsUpdateWithoutHeldItemsInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutHeldItemsInput)
    data!: Identity<ItemsUpdateWithoutHeldItemsInput>;
}
