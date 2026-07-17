import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesCreateWithoutGenerationInput } from './types-create-without-generation.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutGenerationInput } from './types-create-or-connect-without-generation.input';
import type { Identity } from 'identity-type';
import { TypesCreateManyGenerationInputEnvelope } from './types-create-many-generation-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';

@InputType()
export class TypesUncheckedCreateNestedManyWithoutGenerationInput {

    @Field(() => [TypesCreateWithoutGenerationInput], {nullable:true})
    @Type(() => TypesCreateWithoutGenerationInput)
    create?: Array<TypesCreateWithoutGenerationInput>;

    @Field(() => [TypesCreateOrConnectWithoutGenerationInput], {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutGenerationInput)
    connectOrCreate?: Array<TypesCreateOrConnectWithoutGenerationInput>;

    @Field(() => TypesCreateManyGenerationInputEnvelope, {nullable:true})
    @Type(() => TypesCreateManyGenerationInputEnvelope)
    createMany?: Identity<TypesCreateManyGenerationInputEnvelope>;

    @Field(() => [TypesWhereUniqueInput], {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TypesWhereUniqueInput, 'id'>>;
}
