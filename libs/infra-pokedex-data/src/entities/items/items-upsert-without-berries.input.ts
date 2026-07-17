import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsUpdateWithoutBerriesInput } from './items-update-without-berries.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutBerriesInput } from './items-create-without-berries.input';
import { ItemsWhereInput } from './items-where.input';

@InputType()
export class ItemsUpsertWithoutBerriesInput {

    @Field(() => ItemsUpdateWithoutBerriesInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutBerriesInput)
    update!: Identity<ItemsUpdateWithoutBerriesInput>;

    @Field(() => ItemsCreateWithoutBerriesInput, {nullable:false})
    @Type(() => ItemsCreateWithoutBerriesInput)
    create!: Identity<ItemsCreateWithoutBerriesInput>;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: Identity<ItemsWhereInput>;
}
