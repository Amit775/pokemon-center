import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesCreateWithoutEfficacyInput } from './types-create-without-efficacy.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutEfficacyInput } from './types-create-or-connect-without-efficacy.input';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';

@InputType()
export class TypesCreateNestedOneWithoutEfficacyInput {

    @Field(() => TypesCreateWithoutEfficacyInput, {nullable:true})
    @Type(() => TypesCreateWithoutEfficacyInput)
    create?: Identity<TypesCreateWithoutEfficacyInput>;

    @Field(() => TypesCreateOrConnectWithoutEfficacyInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutEfficacyInput)
    connectOrCreate?: Identity<TypesCreateOrConnectWithoutEfficacyInput>;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;
}
