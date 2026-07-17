import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { AbilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { AbilitiesCreateWithoutGenerationInput } from './abilities-create-without-generation.input';

@InputType()
export class AbilitiesCreateOrConnectWithoutGenerationInput {

    @Field(() => AbilitiesWhereUniqueInput, {nullable:false})
    @Type(() => AbilitiesWhereUniqueInput)
    where!: Prisma.AtLeast<AbilitiesWhereUniqueInput, 'id'>;

    @Field(() => AbilitiesCreateWithoutGenerationInput, {nullable:false})
    @Type(() => AbilitiesCreateWithoutGenerationInput)
    create!: Identity<AbilitiesCreateWithoutGenerationInput>;
}
