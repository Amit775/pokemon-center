import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsUpdateWithoutFlagMapInput } from './items-update-without-flag-map.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutFlagMapInput } from './items-create-without-flag-map.input';
import { ItemsWhereInput } from './items-where.input';

@InputType()
export class ItemsUpsertWithoutFlagMapInput {

    @Field(() => ItemsUpdateWithoutFlagMapInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutFlagMapInput)
    update!: ItemsUpdateWithoutFlagMapInput;

    @Field(() => ItemsCreateWithoutFlagMapInput, {nullable:false})
    @Type(() => ItemsCreateWithoutFlagMapInput)
    create!: ItemsCreateWithoutFlagMapInput;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: ItemsWhereInput;
}
