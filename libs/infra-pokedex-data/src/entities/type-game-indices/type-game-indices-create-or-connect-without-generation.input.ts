import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TypeGameIndicesWhereUniqueInput } from './type-game-indices-where-unique.input';
import { Type } from 'class-transformer';
import { TypeGameIndicesCreateWithoutGenerationInput } from './type-game-indices-create-without-generation.input';

@InputType()
export class TypeGameIndicesCreateOrConnectWithoutGenerationInput {

    @Field(() => TypeGameIndicesWhereUniqueInput, {nullable:false})
    @Type(() => TypeGameIndicesWhereUniqueInput)
    where!: Prisma.AtLeast<TypeGameIndicesWhereUniqueInput, 'type_id_generation_id'>;

    @Field(() => TypeGameIndicesCreateWithoutGenerationInput, {nullable:false})
    @Type(() => TypeGameIndicesCreateWithoutGenerationInput)
    create!: TypeGameIndicesCreateWithoutGenerationInput;
}
