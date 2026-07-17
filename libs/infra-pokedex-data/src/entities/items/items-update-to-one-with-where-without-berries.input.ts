import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ItemsWhereInput } from './items-where.input';
import { Type } from 'class-transformer';
import { ItemsUpdateWithoutBerriesInput } from './items-update-without-berries.input';

@InputType()
export class ItemsUpdateToOneWithWhereWithoutBerriesInput {

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: ItemsWhereInput;

    @Field(() => ItemsUpdateWithoutBerriesInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutBerriesInput)
    data!: ItemsUpdateWithoutBerriesInput;
}
