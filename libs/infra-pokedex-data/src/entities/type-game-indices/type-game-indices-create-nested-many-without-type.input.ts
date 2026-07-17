import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypeGameIndicesCreateWithoutTypeInput } from './type-game-indices-create-without-type.input';
import { Type } from 'class-transformer';
import { TypeGameIndicesCreateOrConnectWithoutTypeInput } from './type-game-indices-create-or-connect-without-type.input';
import type { Identity } from 'identity-type';
import { TypeGameIndicesCreateManyTypeInputEnvelope } from './type-game-indices-create-many-type-input-envelope.input';
import { Prisma } from '@pokemon-center/prisma';
import { TypeGameIndicesWhereUniqueInput } from './type-game-indices-where-unique.input';

@InputType()
export class TypeGameIndicesCreateNestedManyWithoutTypeInput {

    @Field(() => [TypeGameIndicesCreateWithoutTypeInput], {nullable:true})
    @Type(() => TypeGameIndicesCreateWithoutTypeInput)
    create?: Array<TypeGameIndicesCreateWithoutTypeInput>;

    @Field(() => [TypeGameIndicesCreateOrConnectWithoutTypeInput], {nullable:true})
    @Type(() => TypeGameIndicesCreateOrConnectWithoutTypeInput)
    connectOrCreate?: Array<TypeGameIndicesCreateOrConnectWithoutTypeInput>;

    @Field(() => TypeGameIndicesCreateManyTypeInputEnvelope, {nullable:true})
    @Type(() => TypeGameIndicesCreateManyTypeInputEnvelope)
    createMany?: Identity<TypeGameIndicesCreateManyTypeInputEnvelope>;

    @Field(() => [TypeGameIndicesWhereUniqueInput], {nullable:true})
    @Type(() => TypeGameIndicesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TypeGameIndicesWhereUniqueInput, 'type_id_generation_id'>>;
}
