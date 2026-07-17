import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MovesCreateWithoutMachinesInput } from './moves-create-without-machines.input';

@InputType()
export class MovesCreateOrConnectWithoutMachinesInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutMachinesInput, {nullable:false})
    @Type(() => MovesCreateWithoutMachinesInput)
    create!: Identity<MovesCreateWithoutMachinesInput>;
}
