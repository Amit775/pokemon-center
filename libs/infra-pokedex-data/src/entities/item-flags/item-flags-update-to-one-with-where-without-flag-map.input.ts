import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemFlagsWhereInput } from './item-flags-where.input';
import { Type } from 'class-transformer';
import { ItemFlagsUpdateWithoutFlagMapInput } from './item-flags-update-without-flag-map.input';

@InputType()
export class ItemFlagsUpdateToOneWithWhereWithoutFlagMapInput {

    @Field(() => ItemFlagsWhereInput, {nullable:true})
    @Type(() => ItemFlagsWhereInput)
    where?: ItemFlagsWhereInput;

    @Field(() => ItemFlagsUpdateWithoutFlagMapInput, {nullable:false})
    @Type(() => ItemFlagsUpdateWithoutFlagMapInput)
    data!: ItemFlagsUpdateWithoutFlagMapInput;
}
