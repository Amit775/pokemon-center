import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemFlagMapCreateInput } from './item-flag-map-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneItemFlagMapArgs {

    @Field(() => ItemFlagMapCreateInput, {nullable:false})
    @Type(() => ItemFlagMapCreateInput)
    data!: ItemFlagMapCreateInput;
}
