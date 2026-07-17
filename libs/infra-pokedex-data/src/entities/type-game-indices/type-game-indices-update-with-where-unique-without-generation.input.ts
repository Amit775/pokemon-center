import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TypeGameIndicesWhereUniqueInput } from './type-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { TypeGameIndicesUpdateWithoutGenerationInput } from './type-game-indices-update-without-generation.input';

@InputType()
export class TypeGameIndicesUpdateWithWhereUniqueWithoutGenerationInput {

    @Field(() => TypeGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => TypeGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<TypeGameIndicesWhereUniqueInput, 'type_id_generation_id'>;

    @Field(() => TypeGameIndicesUpdateWithoutGenerationInput, {nullable:false})
    @Type(() => TypeGameIndicesUpdateWithoutGenerationInput)
    data!: TypeGameIndicesUpdateWithoutGenerationInput;
}
