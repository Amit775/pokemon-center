import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlagMapScalarWhereInput } from './item-flag-map-scalar-where.input';
import { Type } from 'class-transformer';
import { ItemFlagMapUncheckedUpdateManyWithoutFlagInput } from './item-flag-map-unchecked-update-many-without-flag.input';

@InputType()
export class ItemFlagMapUpdateManyWithWhereWithoutFlagInput {

    @Field(() => ItemFlagMapScalarWhereInput, {nullable:false})
    @Type(() => ItemFlagMapScalarWhereInput)
    where!: Identity<ItemFlagMapScalarWhereInput>;

    @Field(() => ItemFlagMapUncheckedUpdateManyWithoutFlagInput, {nullable:false})
    @Type(() => ItemFlagMapUncheckedUpdateManyWithoutFlagInput)
    data!: Identity<ItemFlagMapUncheckedUpdateManyWithoutFlagInput>;
}
