import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { MovesUpdateWithoutTypeInput } from './moves-update-without-type.input';
import { MovesCreateWithoutTypeInput } from './moves-create-without-type.input';

@InputType()
export class MovesUpsertWithWhereUniqueWithoutTypeInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesUpdateWithoutTypeInput, {nullable:false})
    @Type(() => MovesUpdateWithoutTypeInput)
    update!: MovesUpdateWithoutTypeInput;

    @Field(() => MovesCreateWithoutTypeInput, {nullable:false})
    @Type(() => MovesCreateWithoutTypeInput)
    create!: MovesCreateWithoutTypeInput;
}
