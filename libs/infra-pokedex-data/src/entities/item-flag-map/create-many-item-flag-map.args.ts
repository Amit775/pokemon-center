import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ItemFlagMapCreateManyInput } from './item-flag-map-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyItemFlagMapArgs {

    @Field(() => [ItemFlagMapCreateManyInput], {nullable:false})
    @Type(() => ItemFlagMapCreateManyInput)
    data!: Array<ItemFlagMapCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
