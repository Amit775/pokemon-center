import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AbilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { Type } from 'class-transformer';
import { AbilitiesUpdateWithoutGenerationInput } from './abilities-update-without-generation.input';
import { AbilitiesCreateWithoutGenerationInput } from './abilities-create-without-generation.input';

@InputType()
export class AbilitiesUpsertWithWhereUniqueWithoutGenerationInput {

    @Field(() => AbilitiesWhereUniqueInput, {nullable:false})
    @Type(() => AbilitiesWhereUniqueInput)
    where!: Prisma.AtLeast<AbilitiesWhereUniqueInput, 'id'>;

    @Field(() => AbilitiesUpdateWithoutGenerationInput, {nullable:false})
    @Type(() => AbilitiesUpdateWithoutGenerationInput)
    update!: AbilitiesUpdateWithoutGenerationInput;

    @Field(() => AbilitiesCreateWithoutGenerationInput, {nullable:false})
    @Type(() => AbilitiesCreateWithoutGenerationInput)
    create!: AbilitiesCreateWithoutGenerationInput;
}
