import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsWhereInput } from './items-where.input';
import { Type } from 'class-transformer';
import { ItemsUpdateWithoutBerriesInput } from './items-update-without-berries.input';

@InputType()
export class ItemsUpdateToOneWithWhereWithoutBerriesInput {

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: Identity<ItemsWhereInput>;

    @Field(() => ItemsUpdateWithoutBerriesInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutBerriesInput)
    data!: Identity<ItemsUpdateWithoutBerriesInput>;
}
