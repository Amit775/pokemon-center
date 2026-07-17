import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { TypesUpdateWithoutGenerationInput } from './types-update-without-generation.input';

@InputType()
export class TypesUpdateWithWhereUniqueWithoutGenerationInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesUpdateWithoutGenerationInput, {nullable:false})
    @Type(() => TypesUpdateWithoutGenerationInput)
    data!: Identity<TypesUpdateWithoutGenerationInput>;
}
