import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsCreateWithoutMachinesInput } from './items-create-without-machines.input';
import { Type } from 'class-transformer';
import { ItemsCreateOrConnectWithoutMachinesInput } from './items-create-or-connect-without-machines.input';
import { ItemsUpsertWithoutMachinesInput } from './items-upsert-without-machines.input';
import { Prisma } from '@pokemon-center/prisma';
import { ItemsWhereUniqueInput } from './items-where-unique.input';
import { ItemsUpdateToOneWithWhereWithoutMachinesInput } from './items-update-to-one-with-where-without-machines.input';

@InputType()
export class ItemsUpdateOneRequiredWithoutMachinesNestedInput {

    @Field(() => ItemsCreateWithoutMachinesInput, {nullable:true})
    @Type(() => ItemsCreateWithoutMachinesInput)
    create?: Identity<ItemsCreateWithoutMachinesInput>;

    @Field(() => ItemsCreateOrConnectWithoutMachinesInput, {nullable:true})
    @Type(() => ItemsCreateOrConnectWithoutMachinesInput)
    connectOrCreate?: Identity<ItemsCreateOrConnectWithoutMachinesInput>;

    @Field(() => ItemsUpsertWithoutMachinesInput, {nullable:true})
    @Type(() => ItemsUpsertWithoutMachinesInput)
    upsert?: Identity<ItemsUpsertWithoutMachinesInput>;

    @Field(() => ItemsWhereUniqueInput, {nullable:true})
    @Type(() => ItemsWhereUniqueInput)
    connect?: Prisma.AtLeast<ItemsWhereUniqueInput, 'id'>;

    @Field(() => ItemsUpdateToOneWithWhereWithoutMachinesInput, {nullable:true})
    @Type(() => ItemsUpdateToOneWithWhereWithoutMachinesInput)
    update?: Identity<ItemsUpdateToOneWithWhereWithoutMachinesInput>;
}
