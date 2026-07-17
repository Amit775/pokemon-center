import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeGameIndicesCreateWithoutGenerationInput } from './type-game-indices-create-without-generation.input';
import { Type } from 'class-transformer';
import { TypeGameIndicesCreateOrConnectWithoutGenerationInput } from './type-game-indices-create-or-connect-without-generation.input';
import { TypeGameIndicesUpsertWithWhereUniqueWithoutGenerationInput } from './type-game-indices-upsert-with-where-unique-without-generation.input';
import type { Identity } from 'identity-type';
import { TypeGameIndicesCreateManyGenerationInputEnvelope } from './type-game-indices-create-many-generation-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { TypeGameIndicesWhereUniqueInput } from './type-game-indices-where-unique.input';
import { TypeGameIndicesUpdateWithWhereUniqueWithoutGenerationInput } from './type-game-indices-update-with-where-unique-without-generation.input';
import { TypeGameIndicesUpdateManyWithWhereWithoutGenerationInput } from './type-game-indices-update-many-with-where-without-generation.input';
import { TypeGameIndicesScalarWhereInput } from './type-game-indices-scalar-where.input';

@InputType()
export class TypeGameIndicesUpdateManyWithoutGenerationNestedInput {

    @Field(() => [TypeGameIndicesCreateWithoutGenerationInput], {nullable:true})
    @Type(() => TypeGameIndicesCreateWithoutGenerationInput)
    create?: Array<TypeGameIndicesCreateWithoutGenerationInput>;

    @Field(() => [TypeGameIndicesCreateOrConnectWithoutGenerationInput], {nullable:true})
    @Type(() => TypeGameIndicesCreateOrConnectWithoutGenerationInput)
    connectOrCreate?: Array<TypeGameIndicesCreateOrConnectWithoutGenerationInput>;

    @Field(() => [TypeGameIndicesUpsertWithWhereUniqueWithoutGenerationInput], {nullable:true})
    @Type(() => TypeGameIndicesUpsertWithWhereUniqueWithoutGenerationInput)
    upsert?: Array<TypeGameIndicesUpsertWithWhereUniqueWithoutGenerationInput>;

    @Field(() => TypeGameIndicesCreateManyGenerationInputEnvelope, {nullable:true})
    @Type(() => TypeGameIndicesCreateManyGenerationInputEnvelope)
    createMany?: Identity<TypeGameIndicesCreateManyGenerationInputEnvelope>;

    @Field(() => [TypeGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => TypeGameIndicesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TypeGameIndicesWhereUniqueInput, 'type_id_generation_id'>>;

    @Field(() => [TypeGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => TypeGameIndicesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TypeGameIndicesWhereUniqueInput, 'type_id_generation_id'>>;

    @Field(() => [TypeGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => TypeGameIndicesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TypeGameIndicesWhereUniqueInput, 'type_id_generation_id'>>;

    @Field(() => [TypeGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => TypeGameIndicesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TypeGameIndicesWhereUniqueInput, 'type_id_generation_id'>>;

    @Field(() => [TypeGameIndicesUpdateWithWhereUniqueWithoutGenerationInput], {nullable:true})
    @Type(() => TypeGameIndicesUpdateWithWhereUniqueWithoutGenerationInput)
    update?: Array<TypeGameIndicesUpdateWithWhereUniqueWithoutGenerationInput>;

    @Field(() => [TypeGameIndicesUpdateManyWithWhereWithoutGenerationInput], {nullable:true})
    @Type(() => TypeGameIndicesUpdateManyWithWhereWithoutGenerationInput)
    updateMany?: Array<TypeGameIndicesUpdateManyWithWhereWithoutGenerationInput>;

    @Field(() => [TypeGameIndicesScalarWhereInput], {nullable:true})
    @Type(() => TypeGameIndicesScalarWhereInput)
    deleteMany?: Array<TypeGameIndicesScalarWhereInput>;
}
