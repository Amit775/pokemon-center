import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlagMapScalarWhereInput } from './item-flag-map-scalar-where.input';
import { Type } from 'class-transformer';
import { ItemFlagMapUncheckedUpdateManyWithoutItemInput } from './item-flag-map-unchecked-update-many-without-item.input';

@InputType()
export class ItemFlagMapUpdateManyWithWhereWithoutItemInput {

    @Field(() => ItemFlagMapScalarWhereInput, {nullable:false})
    @Type(() => ItemFlagMapScalarWhereInput)
    where!: Identity<ItemFlagMapScalarWhereInput>;

    @Field(() => ItemFlagMapUncheckedUpdateManyWithoutItemInput, {nullable:false})
    @Type(() => ItemFlagMapUncheckedUpdateManyWithoutItemInput)
    data!: Identity<ItemFlagMapUncheckedUpdateManyWithoutItemInput>;
}
