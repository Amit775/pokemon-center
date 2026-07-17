import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemsCreateWithoutGameIndicesInput } from './items-create-without-game-indices.input';

@InputType()
export class ItemsCreateOrConnectWithoutGameIndicesInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsCreateWithoutGameIndicesInput, {nullable:false})
    @Type(() => ItemsCreateWithoutGameIndicesInput)
    create!: Identity<ItemsCreateWithoutGameIndicesInput>;
}
