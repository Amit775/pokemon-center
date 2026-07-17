import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutFlagMapInput } from './moves-create-without-flag-map.input';

@InputType()
export class MovesCreateOrConnectWithoutFlagMapInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutFlagMapInput, {nullable:false})
    @Type(() => MovesCreateWithoutFlagMapInput)
    create!: MovesCreateWithoutFlagMapInput;
}
