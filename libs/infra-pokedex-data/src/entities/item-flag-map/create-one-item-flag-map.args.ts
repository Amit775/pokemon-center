import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemFlagMapCreateInput } from './item-flag-map-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneItemFlagMapArgs {

    @Field(() => ItemFlagMapCreateInput, {nullable:false})
    @Type(() => ItemFlagMapCreateInput)
    data!: Identity<ItemFlagMapCreateInput>;
}
