import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesCreateWithoutGenerationInput } from './types-create-without-generation.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutGenerationInput } from './types-create-or-connect-without-generation.input';
import { TypesUpsertWithWhereUniqueWithoutGenerationInput } from './types-upsert-with-where-unique-without-generation.input';
import { TypesCreateManyGenerationInputEnvelope } from './types-create-many-generation-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { TypesUpdateWithWhereUniqueWithoutGenerationInput } from './types-update-with-where-unique-without-generation.input';
import { TypesUpdateManyWithWhereWithoutGenerationInput } from './types-update-many-with-where-without-generation.input';
import { TypesScalarWhereInput } from './types-scalar-where.input';

@InputType()
export class TypesUpdateManyWithoutGenerationNestedInput {

    @Field(() => [TypesCreateWithoutGenerationInput], {nullable:true})
    @Type(() => TypesCreateWithoutGenerationInput)
    create?: Array<TypesCreateWithoutGenerationInput>;

    @Field(() => [TypesCreateOrConnectWithoutGenerationInput], {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutGenerationInput)
    connectOrCreate?: Array<TypesCreateOrConnectWithoutGenerationInput>;

    @Field(() => [TypesUpsertWithWhereUniqueWithoutGenerationInput], {nullable:true})
    @Type(() => TypesUpsertWithWhereUniqueWithoutGenerationInput)
    upsert?: Array<TypesUpsertWithWhereUniqueWithoutGenerationInput>;

    @Field(() => TypesCreateManyGenerationInputEnvelope, {nullable:true})
    @Type(() => TypesCreateManyGenerationInputEnvelope)
    createMany?: TypesCreateManyGenerationInputEnvelope;

    @Field(() => [TypesWhereUniqueInput], {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TypesWhereUniqueInput, 'id'>>;

    @Field(() => [TypesWhereUniqueInput], {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TypesWhereUniqueInput, 'id'>>;

    @Field(() => [TypesWhereUniqueInput], {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TypesWhereUniqueInput, 'id'>>;

    @Field(() => [TypesWhereUniqueInput], {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TypesWhereUniqueInput, 'id'>>;

    @Field(() => [TypesUpdateWithWhereUniqueWithoutGenerationInput], {nullable:true})
    @Type(() => TypesUpdateWithWhereUniqueWithoutGenerationInput)
    update?: Array<TypesUpdateWithWhereUniqueWithoutGenerationInput>;

    @Field(() => [TypesUpdateManyWithWhereWithoutGenerationInput], {nullable:true})
    @Type(() => TypesUpdateManyWithWhereWithoutGenerationInput)
    updateMany?: Array<TypesUpdateManyWithWhereWithoutGenerationInput>;

    @Field(() => [TypesScalarWhereInput], {nullable:true})
    @Type(() => TypesScalarWhereInput)
    deleteMany?: Array<TypesScalarWhereInput>;
}
