import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { TypesCreateWithoutBerryFlavorsInput } from './types-create-without-berry-flavors.input';

@InputType()
export class TypesCreateOrConnectWithoutBerryFlavorsInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesCreateWithoutBerryFlavorsInput, {nullable:false})
    @Type(() => TypesCreateWithoutBerryFlavorsInput)
    create!: TypesCreateWithoutBerryFlavorsInput;
}
