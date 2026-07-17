import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import { MovesCreateWithoutDamageClassInput } from './moves-create-without-damage-class.input';

@InputType()
export class MovesCreateOrConnectWithoutDamageClassInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesCreateWithoutDamageClassInput, {nullable:false})
    @Type(() => MovesCreateWithoutDamageClassInput)
    create!: MovesCreateWithoutDamageClassInput;
}
