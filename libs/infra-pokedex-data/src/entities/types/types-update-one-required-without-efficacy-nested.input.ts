import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesCreateWithoutEfficacyInput } from './types-create-without-efficacy.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutEfficacyInput } from './types-create-or-connect-without-efficacy.input';
import { TypesUpsertWithoutEfficacyInput } from './types-upsert-without-efficacy.input';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { TypesUpdateToOneWithWhereWithoutEfficacyInput } from './types-update-to-one-with-where-without-efficacy.input';

@InputType()
export class TypesUpdateOneRequiredWithoutEfficacyNestedInput {

    @Field(() => TypesCreateWithoutEfficacyInput, {nullable:true})
    @Type(() => TypesCreateWithoutEfficacyInput)
    create?: TypesCreateWithoutEfficacyInput;

    @Field(() => TypesCreateOrConnectWithoutEfficacyInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutEfficacyInput)
    connectOrCreate?: TypesCreateOrConnectWithoutEfficacyInput;

    @Field(() => TypesUpsertWithoutEfficacyInput, {nullable:true})
    @Type(() => TypesUpsertWithoutEfficacyInput)
    upsert?: TypesUpsertWithoutEfficacyInput;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesUpdateToOneWithWhereWithoutEfficacyInput, {nullable:true})
    @Type(() => TypesUpdateToOneWithWhereWithoutEfficacyInput)
    update?: TypesUpdateToOneWithWhereWithoutEfficacyInput;
}
