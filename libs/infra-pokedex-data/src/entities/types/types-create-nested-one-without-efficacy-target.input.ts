import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesCreateWithoutEfficacyTargetInput } from './types-create-without-efficacy-target.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutEfficacyTargetInput } from './types-create-or-connect-without-efficacy-target.input';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';

@InputType()
export class TypesCreateNestedOneWithoutEfficacyTargetInput {

    @Field(() => TypesCreateWithoutEfficacyTargetInput, {nullable:true})
    @Type(() => TypesCreateWithoutEfficacyTargetInput)
    create?: Identity<TypesCreateWithoutEfficacyTargetInput>;

    @Field(() => TypesCreateOrConnectWithoutEfficacyTargetInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutEfficacyTargetInput)
    connectOrCreate?: Identity<TypesCreateOrConnectWithoutEfficacyTargetInput>;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;
}
