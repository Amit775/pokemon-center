import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemFlagMapCreateManyItemInput } from './item-flag-map-create-many-item.input';
import { Type } from 'class-transformer';

@InputType()
export class ItemFlagMapCreateManyItemInputEnvelope {

    @Field(() => [ItemFlagMapCreateManyItemInput], {nullable:false})
    @Type(() => ItemFlagMapCreateManyItemInput)
    data!: Array<ItemFlagMapCreateManyItemInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
