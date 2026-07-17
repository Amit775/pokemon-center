import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import { BerriesCreateWithoutFirmnessInput } from './berries-create-without-firmness.input';

@InputType()
export class BerriesCreateOrConnectWithoutFirmnessInput {

    @Field(() => BerriesWhereUniqueInput, {nullable:false})
    @Type(() => BerriesWhereUniqueInput)
    where!: Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>;

    @Field(() => BerriesCreateWithoutFirmnessInput, {nullable:false})
    @Type(() => BerriesCreateWithoutFirmnessInput)
    create!: BerriesCreateWithoutFirmnessInput;
}
