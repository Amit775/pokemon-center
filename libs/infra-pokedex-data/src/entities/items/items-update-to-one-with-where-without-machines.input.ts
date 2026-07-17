import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { ItemsWhereInput } from './items-where.input';
import { Type } from 'class-transformer';
import { ItemsUpdateWithoutMachinesInput } from './items-update-without-machines.input';

@InputType()
export class ItemsUpdateToOneWithWhereWithoutMachinesInput {

    @Field(() => ItemsWhereInput, {nullable:true})
    @Type(() => ItemsWhereInput)
    where?: Identity<ItemsWhereInput>;

    @Field(() => ItemsUpdateWithoutMachinesInput, {nullable:false})
    @Type(() => ItemsUpdateWithoutMachinesInput)
    data!: Identity<ItemsUpdateWithoutMachinesInput>;
}
