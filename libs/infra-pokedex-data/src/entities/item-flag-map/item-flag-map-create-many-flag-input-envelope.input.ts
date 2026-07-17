import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemFlagMapCreateManyFlagInput } from './item-flag-map-create-many-flag.input';
import { Type } from 'class-transformer';

@InputType()
export class ItemFlagMapCreateManyFlagInputEnvelope {

    @Field(() => [ItemFlagMapCreateManyFlagInput], {nullable:false})
    @Type(() => ItemFlagMapCreateManyFlagInput)
    data!: Array<ItemFlagMapCreateManyFlagInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
