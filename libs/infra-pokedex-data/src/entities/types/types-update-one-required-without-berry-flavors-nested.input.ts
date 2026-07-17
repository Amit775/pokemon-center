import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesCreateWithoutBerryFlavorsInput } from './types-create-without-berry-flavors.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutBerryFlavorsInput } from './types-create-or-connect-without-berry-flavors.input';
import { TypesUpsertWithoutBerryFlavorsInput } from './types-upsert-without-berry-flavors.input';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { TypesUpdateToOneWithWhereWithoutBerryFlavorsInput } from './types-update-to-one-with-where-without-berry-flavors.input';

@InputType()
export class TypesUpdateOneRequiredWithoutBerryFlavorsNestedInput {

    @Field(() => TypesCreateWithoutBerryFlavorsInput, {nullable:true})
    @Type(() => TypesCreateWithoutBerryFlavorsInput)
    create?: TypesCreateWithoutBerryFlavorsInput;

    @Field(() => TypesCreateOrConnectWithoutBerryFlavorsInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutBerryFlavorsInput)
    connectOrCreate?: TypesCreateOrConnectWithoutBerryFlavorsInput;

    @Field(() => TypesUpsertWithoutBerryFlavorsInput, {nullable:true})
    @Type(() => TypesUpsertWithoutBerryFlavorsInput)
    upsert?: TypesUpsertWithoutBerryFlavorsInput;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesUpdateToOneWithWhereWithoutBerryFlavorsInput, {nullable:true})
    @Type(() => TypesUpdateToOneWithWhereWithoutBerryFlavorsInput)
    update?: TypesUpdateToOneWithWhereWithoutBerryFlavorsInput;
}
