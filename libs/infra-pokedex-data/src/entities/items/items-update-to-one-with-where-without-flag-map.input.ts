import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsWhereInput } from './items-where.input';
import { Type } from 'class-transformer';
import { ItemsUpdateWithoutFlagMapInput } from './items-update-without-flag-map.input';

@InputType()
export class ItemsUpdateToOneWithWhereWithoutFlagMapInput {

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: Identity<ItemsWhereInput>;

    @Field(() => ItemsUpdateWithoutFlagMapInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutFlagMapInput)
    data!: Identity<ItemsUpdateWithoutFlagMapInput>;
}
