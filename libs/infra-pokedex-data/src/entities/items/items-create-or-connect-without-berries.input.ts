import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutBerriesInput } from './items-create-without-berries.input';

@InputType()
export class ItemsCreateOrConnectWithoutBerriesInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsCreateWithoutBerriesInput, {nullable:false})
    @Type(() => ItemsCreateWithoutBerriesInput)
    create!: ItemsCreateWithoutBerriesInput;
}
