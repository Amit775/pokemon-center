import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesCreateWithoutEfficacyTargetInput } from './types-create-without-efficacy-target.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutEfficacyTargetInput } from './types-create-or-connect-without-efficacy-target.input';
import { TypesUpsertWithoutEfficacyTargetInput } from './types-upsert-without-efficacy-target.input';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { TypesUpdateToOneWithWhereWithoutEfficacyTargetInput } from './types-update-to-one-with-where-without-efficacy-target.input';

@InputType()
export class TypesUpdateOneRequiredWithoutEfficacyTargetNestedInput {

    @Field(() => TypesCreateWithoutEfficacyTargetInput, {nullable:true})
    @Type(() => TypesCreateWithoutEfficacyTargetInput)
    create?: TypesCreateWithoutEfficacyTargetInput;

    @Field(() => TypesCreateOrConnectWithoutEfficacyTargetInput, {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutEfficacyTargetInput)
    connectOrCreate?: TypesCreateOrConnectWithoutEfficacyTargetInput;

    @Field(() => TypesUpsertWithoutEfficacyTargetInput, {nullable:true})
    @Type(() => TypesUpsertWithoutEfficacyTargetInput)
    upsert?: TypesUpsertWithoutEfficacyTargetInput;

    @Field(() => TypesWhereUniqueInput, {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesUpdateToOneWithWhereWithoutEfficacyTargetInput, {nullable:true})
    @Type(() => TypesUpdateToOneWithWhereWithoutEfficacyTargetInput)
    update?: TypesUpdateToOneWithWhereWithoutEfficacyTargetInput;
}
