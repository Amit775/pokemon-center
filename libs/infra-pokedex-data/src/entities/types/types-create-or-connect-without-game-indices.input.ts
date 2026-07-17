import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { TypesCreateWithoutGameIndicesInput } from './types-create-without-game-indices.input';

@InputType()
export class TypesCreateOrConnectWithoutGameIndicesInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesCreateWithoutGameIndicesInput, {nullable:false})
    @Type(() => TypesCreateWithoutGameIndicesInput)
    create!: Identity<TypesCreateWithoutGameIndicesInput>;
}
