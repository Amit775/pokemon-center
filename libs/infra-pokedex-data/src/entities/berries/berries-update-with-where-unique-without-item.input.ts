import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BerriesWhereUniqueInput } from './berries-where-unique.input';
import { Type } from 'class-transformer';
import { BerriesUpdateWithoutItemInput } from './berries-update-without-item.input';

@InputType()
export class BerriesUpdateWithWhereUniqueWithoutItemInput {

    @Field(() => BerriesWhereUniqueInput, {nullable:false})
    @Type(() => BerriesWhereUniqueInput)
    where!: Prisma.AtLeast<BerriesWhereUniqueInput, 'id'>;

    @Field(() => BerriesUpdateWithoutItemInput, {nullable:false})
    @Type(() => BerriesUpdateWithoutItemInput)
    data!: BerriesUpdateWithoutItemInput;
}
