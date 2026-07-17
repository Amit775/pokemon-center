import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { MovesUpdateWithoutMachinesInput } from './moves-update-without-machines.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutMachinesInput } from './moves-create-without-machines.input';
import { MovesWhereInput } from './moves-where.input';

@InputType()
export class MovesUpsertWithoutMachinesInput {

    @Field(() => MovesUpdateWithoutMachinesInput, {nullable:false})
    @Type(() => MovesUpdateWithoutMachinesInput)
    update!: Identity<MovesUpdateWithoutMachinesInput>;

    @Field(() => MovesCreateWithoutMachinesInput, {nullable:false})
    @Type(() => MovesCreateWithoutMachinesInput)
    create!: Identity<MovesCreateWithoutMachinesInput>;

    @Field(() => MovesWhereInput, {nullable:true})
    @Type(() => MovesWhereInput)
    where?: Identity<MovesWhereInput>;
}
