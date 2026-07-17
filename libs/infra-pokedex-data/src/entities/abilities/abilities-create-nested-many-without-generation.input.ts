import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AbilitiesCreateWithoutGenerationInput } from './abilities-create-without-generation.input';
import { Type } from 'class-transformer';
import { AbilitiesCreateOrConnectWithoutGenerationInput } from './abilities-create-or-connect-without-generation.input';
import type { Identity } from 'identity-type';
import { AbilitiesCreateManyGenerationInputEnvelope } from './abilities-create-many-generation-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { AbilitiesWhereUniqueInput } from './abilities-where-unique.input';

@InputType()
export class AbilitiesCreateNestedManyWithoutGenerationInput {

    @Field(() => [AbilitiesCreateWithoutGenerationInput], {nullable:true})
    @Type(() => AbilitiesCreateWithoutGenerationInput)
    create?: Array<AbilitiesCreateWithoutGenerationInput>;

    @Field(() => [AbilitiesCreateOrConnectWithoutGenerationInput], {nullable:true})
    @Type(() => AbilitiesCreateOrConnectWithoutGenerationInput)
    connectOrCreate?: Array<AbilitiesCreateOrConnectWithoutGenerationInput>;

    @Field(() => AbilitiesCreateManyGenerationInputEnvelope, {nullable:true})
    @Type(() => AbilitiesCreateManyGenerationInputEnvelope)
    createMany?: Identity<AbilitiesCreateManyGenerationInputEnvelope>;

    @Field(() => [AbilitiesWhereUniqueInput], {nullable:true})
    @Type(() => AbilitiesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AbilitiesWhereUniqueInput, 'id'>>;
}
