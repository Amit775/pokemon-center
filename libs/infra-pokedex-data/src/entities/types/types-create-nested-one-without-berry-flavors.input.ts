import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesCreateWithoutBerryFlavorsInput } from './types-create-without-berry-flavors.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutBerryFlavorsInput } from './types-create-or-connect-without-berry-flavors.input';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';

@InputType()
export class TypesCreateNestedOneWithoutBerryFlavorsInput {

    @Field(() => TypesCreateWithoutBerryFlavorsInput, {nullable:true})
    @Type(() => TypesCreateWithoutBerryFlavorsInput)
    create?: Identity<TypesCreateWithoutBerryFlavorsInput>;

    @Field(() => TypesCreateOrConnectWithoutBerryFlavorsInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutBerryFlavorsInput)
    connectOrCreate?: Identity<TypesCreateOrConnectWithoutBerryFlavorsInput>;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;
}
