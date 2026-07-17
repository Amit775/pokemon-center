import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import { BerriesUpdateWithoutFirmnessInput } from './berries-update-without-firmness.input';

@InputType()
export class BerriesUpdateWithWhereUniqueWithoutFirmnessInput {

    @Field(() => BerriesWhereUniqueInput, {nullable:false})
    @Type(() => BerriesWhereUniqueInput)
    where!: Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>;

    @Field(() => BerriesUpdateWithoutFirmnessInput, {nullable:false})
    @Type(() => BerriesUpdateWithoutFirmnessInput)
    data!: BerriesUpdateWithoutFirmnessInput;
}
