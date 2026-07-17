import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { TypesCreateWithoutGameIndicesInput } from './types-create-without-game-indices.input';

@InputType()
export class TypesCreateOrConnectWithoutGameIndicesInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesCreateWithoutGameIndicesInput, {nullable:false})
    @Type(() => TypesCreateWithoutGameIndicesInput)
    create!: TypesCreateWithoutGameIndicesInput;
}
