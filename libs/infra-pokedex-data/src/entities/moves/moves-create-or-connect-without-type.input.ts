import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutTypeInput } from './moves-create-without-type.input';

@InputType()
export class MovesCreateOrConnectWithoutTypeInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutTypeInput, {nullable:false})
    @Type(() => MovesCreateWithoutTypeInput)
    create!: MovesCreateWithoutTypeInput;
}
