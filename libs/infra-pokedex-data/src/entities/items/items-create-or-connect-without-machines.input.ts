import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { ItemsCreateWithoutMachinesInput } from './items-create-without-machines.input';

@InputType()
export class ItemsCreateOrConnectWithoutMachinesInput {

    @Field(() => ItemsWhereUniqueInput, {nullable:false})
    @Type(() => ItemsWhereUniqueInput)
    where!: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsCreateWithoutMachinesInput, {nullable:false})
    @Type(() => ItemsCreateWithoutMachinesInput)
    create!: Identity<ItemsCreateWithoutMachinesInput>;
}
