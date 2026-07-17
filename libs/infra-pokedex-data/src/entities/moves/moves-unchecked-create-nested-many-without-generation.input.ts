import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MovesCreateWithoutGenerationInput } from './moves-create-without-generation.input';
import { Type } from 'class-transformer';
import { MovesCreateOrConnectWithoutGenerationInput } from './moves-create-or-connect-without-generation.input';
import type { Identity } from 'identity-type';
import { MovesCreateManyGenerationInputEnvelope } from './moves-create-many-generation-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';

@InputType()
export class MovesUncheckedCreateNestedManyWithoutGenerationInput {

    @Field(() => [MovesCreateWithoutGenerationInput], {nullable:true})
    @Type(() => MovesCreateWithoutGenerationInput)
    create?: Array<MovesCreateWithoutGenerationInput>;

    @Field(() => [MovesCreateOrConnectWithoutGenerationInput], {nullable:true})
    @Type(() => MovesCreateOrConnectWithoutGenerationInput)
    connectOrCreate?: Array<MovesCreateOrConnectWithoutGenerationInput>;

    @Field(() => MovesCreateManyGenerationInputEnvelope, {nullable:true})
    @Type(() => MovesCreateManyGenerationInputEnvelope)
    createMany?: Identity<MovesCreateManyGenerationInputEnvelope>;

    @Field(() => [MovesWhereUniqueInput], {nullable:true})
    @Type(() => MovesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<MovesWhereUniqueInput, 'id'>>;
}
