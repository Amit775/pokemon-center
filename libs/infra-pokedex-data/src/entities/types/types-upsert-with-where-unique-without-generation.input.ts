import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { TypesUpdateWithoutGenerationInput } from './types-update-without-generation.input';
import { TypesCreateWithoutGenerationInput } from './types-create-without-generation.input';

@InputType()
export class TypesUpsertWithWhereUniqueWithoutGenerationInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesUpdateWithoutGenerationInput, {nullable:false})
    @Type(() => TypesUpdateWithoutGenerationInput)
    update!: Identity<TypesUpdateWithoutGenerationInput>;

    @Field(() => TypesCreateWithoutGenerationInput, {nullable:false})
    @Type(() => TypesCreateWithoutGenerationInput)
    create!: Identity<TypesCreateWithoutGenerationInput>;
}
