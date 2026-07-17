import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { TypeGameIndicesWhereUniqueInput } from './type-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { TypeGameIndicesUpdateWithoutGenerationInput } from './type-game-indices-update-without-generation.input';
import { TypeGameIndicesCreateWithoutGenerationInput } from './type-game-indices-create-without-generation.input';

@InputType()
export class TypeGameIndicesUpsertWithWhereUniqueWithoutGenerationInput {

    @Field(() => TypeGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => TypeGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<TypeGameIndicesWhereUniqueInput, 'type_id_generation_id'>;

    @Field(() => TypeGameIndicesUpdateWithoutGenerationInput, {nullable:false})
    @Type(() => TypeGameIndicesUpdateWithoutGenerationInput)
    update!: Identity<TypeGameIndicesUpdateWithoutGenerationInput>;

    @Field(() => TypeGameIndicesCreateWithoutGenerationInput, {nullable:false})
    @Type(() => TypeGameIndicesCreateWithoutGenerationInput)
    create!: Identity<TypeGameIndicesCreateWithoutGenerationInput>;
}
