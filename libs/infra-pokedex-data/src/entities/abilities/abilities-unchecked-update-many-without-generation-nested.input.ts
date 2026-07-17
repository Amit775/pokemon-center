import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AbilitiesCreateWithoutGenerationInput } from './abilities-create-without-generation.input';
import { Type } from 'class-transformer';
import { AbilitiesCreateOrConnectWithoutGenerationInput } from './abilities-create-or-connect-without-generation.input';
import { AbilitiesUpsertWithWhereUniqueWithoutGenerationInput } from './abilities-upsert-with-where-unique-without-generation.input';
import { AbilitiesCreateManyGenerationInputEnvelope } from './abilities-create-many-generation-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AbilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { AbilitiesUpdateWithWhereUniqueWithoutGenerationInput } from './abilities-update-with-where-unique-without-generation.input';
import { AbilitiesUpdateManyWithWhereWithoutGenerationInput } from './abilities-update-many-with-where-without-generation.input';
import { AbilitiesScalarWhereInput } from './abilities-scalar-where.input';

@InputType()
export class AbilitiesUncheckedUpdateManyWithoutGenerationNestedInput {

    @Field(() => [AbilitiesCreateWithoutGenerationInput], {nullable:true})
    @Type(() => AbilitiesCreateWithoutGenerationInput)
    create?: Array<AbilitiesCreateWithoutGenerationInput>;

    @Field(() => [AbilitiesCreateOrConnectWithoutGenerationInput], {nullable:true})
    @Type(() => AbilitiesCreateOrConnectWithoutGenerationInput)
    connectOrCreate?: Array<AbilitiesCreateOrConnectWithoutGenerationInput>;

    @Field(() => [AbilitiesUpsertWithWhereUniqueWithoutGenerationInput], {nullable:true})
    @Type(() => AbilitiesUpsertWithWhereUniqueWithoutGenerationInput)
    upsert?: Array<AbilitiesUpsertWithWhereUniqueWithoutGenerationInput>;

    @Field(() => AbilitiesCreateManyGenerationInputEnvelope, {nullable:true})
    @Type(() => AbilitiesCreateManyGenerationInputEnvelope)
    createMany?: AbilitiesCreateManyGenerationInputEnvelope;

    @Field(() => [AbilitiesWhereUniqueInput], {nullable:true})
    @Type(() => AbilitiesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AbilitiesWhereUniqueInput, 'id'>>;

    @Field(() => [AbilitiesWhereUniqueInput], {nullable:true})
    @Type(() => AbilitiesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AbilitiesWhereUniqueInput, 'id'>>;

    @Field(() => [AbilitiesWhereUniqueInput], {nullable:true})
    @Type(() => AbilitiesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AbilitiesWhereUniqueInput, 'id'>>;

    @Field(() => [AbilitiesWhereUniqueInput], {nullable:true})
    @Type(() => AbilitiesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AbilitiesWhereUniqueInput, 'id'>>;

    @Field(() => [AbilitiesUpdateWithWhereUniqueWithoutGenerationInput], {nullable:true})
    @Type(() => AbilitiesUpdateWithWhereUniqueWithoutGenerationInput)
    update?: Array<AbilitiesUpdateWithWhereUniqueWithoutGenerationInput>;

    @Field(() => [AbilitiesUpdateManyWithWhereWithoutGenerationInput], {nullable:true})
    @Type(() => AbilitiesUpdateManyWithWhereWithoutGenerationInput)
    updateMany?: Array<AbilitiesUpdateManyWithWhereWithoutGenerationInput>;

    @Field(() => [AbilitiesScalarWhereInput], {nullable:true})
    @Type(() => AbilitiesScalarWhereInput)
    deleteMany?: Array<AbilitiesScalarWhereInput>;
}
