import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { AbilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { AbilitiesUpdateWithoutGenerationInput } from './abilities-update-without-generation.input';
import { AbilitiesCreateWithoutGenerationInput } from './abilities-create-without-generation.input';

@InputType()
export class AbilitiesUpsertWithWhereUniqueWithoutGenerationInput {

    @Field(() => AbilitiesWhereUniqueInput, {nullable:false})
    @Type(() => AbilitiesWhereUniqueInput)
    where!: Prisma.AtLeast<AbilitiesWhereUniqueInput, 'id'>;

    @Field(() => AbilitiesUpdateWithoutGenerationInput, {nullable:false})
    @Type(() => AbilitiesUpdateWithoutGenerationInput)
    update!: Identity<AbilitiesUpdateWithoutGenerationInput>;

    @Field(() => AbilitiesCreateWithoutGenerationInput, {nullable:false})
    @Type(() => AbilitiesCreateWithoutGenerationInput)
    create!: Identity<AbilitiesCreateWithoutGenerationInput>;
}
