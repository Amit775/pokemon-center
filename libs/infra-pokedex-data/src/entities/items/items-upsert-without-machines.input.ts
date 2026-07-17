import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsUpdateWithoutMachinesInput } from './items-update-without-machines.input';
import { Type } from 'class-transformer';
import { ItemsCreateWithoutMachinesInput } from './items-create-without-machines.input';
import { ItemsWhereInput } from './items-where.input';

@InputType()
export class ItemsUpsertWithoutMachinesInput {

    @Field(() => ItemsUpdateWithoutMachinesInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutMachinesInput)
    update!: Identity<ItemsUpdateWithoutMachinesInput>;

    @Field(() => ItemsCreateWithoutMachinesInput, {nullable:false})
    @Type(() => ItemsCreateWithoutMachinesInput)
    create!: Identity<ItemsCreateWithoutMachinesInput>;

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: Identity<ItemsWhereInput>;
}
