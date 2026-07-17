import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeGameIndicesCreateWithoutGenerationInput } from './type-game-indices-create-without-generation.input';
import { Type } from 'class-transformer';
import { TypeGameIndicesCreateOrConnectWithoutGenerationInput } from './type-game-indices-create-or-connect-without-generation.input';
import { TypeGameIndicesCreateManyGenerationInputEnvelope } from './type-game-indices-create-many-generation-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TypeGameIndicesWhereUniqueInput } from './type-game-indices-where-unique.input';

@InputType()
export class TypeGameIndicesCreateNestedManyWithoutGenerationInput {

    @Field(() => [TypeGameIndicesCreateWithoutGenerationInput], {nullable:true})
    @Type(() => TypeGameIndicesCreateWithoutGenerationInput)
    create?: Array<TypeGameIndicesCreateWithoutGenerationInput>;

    @Field(() => [TypeGameIndicesCreateOrConnectWithoutGenerationInput], {nullable:true})
    @Type(() => TypeGameIndicesCreateOrConnectWithoutGenerationInput)
    connectOrCreate?: Array<TypeGameIndicesCreateOrConnectWithoutGenerationInput>;

    @Field(() => TypeGameIndicesCreateManyGenerationInputEnvelope, {nullable:true})
    @Type(() => TypeGameIndicesCreateManyGenerationInputEnvelope)
    createMany?: TypeGameIndicesCreateManyGenerationInputEnvelope;

    @Field(() => [TypeGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => TypeGameIndicesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TypeGameIndicesWhereUniqueInput, 'type_id_generation_id'>>;
}
