import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AbilitiesWhereUniqueInput } from './abilities-where-unique.input';
import { Type } from 'class-transformer';
import { AbilitiesUpdateWithoutGenerationInput } from './abilities-update-without-generation.input';

@InputType()
export class AbilitiesUpdateWithWhereUniqueWithoutGenerationInput {

    @Field(() => AbilitiesWhereUniqueInput, {nullable:false})
    @Type(() => AbilitiesWhereUniqueInput)
    where!: Prisma.AtLeast<AbilitiesWhereUniqueInput, 'id'>;

    @Field(() => AbilitiesUpdateWithoutGenerationInput, {nullable:false})
    @Type(() => AbilitiesUpdateWithoutGenerationInput)
    data!: AbilitiesUpdateWithoutGenerationInput;
}
