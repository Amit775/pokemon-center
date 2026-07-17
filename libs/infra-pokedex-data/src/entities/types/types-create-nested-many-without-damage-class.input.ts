import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesCreateWithoutDamageClassInput } from './types-create-without-damage-class.input';
import { Type } from 'class-transformer';
import { TypesCreateOrConnectWithoutDamageClassInput } from './types-create-or-connect-without-damage-class.input';
import { TypesCreateManyDamageClassInputEnvelope } from './types-create-many-damage-class-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';

@InputType()
export class TypesCreateNestedManyWithoutDamageClassInput {

    @Field(() => [TypesCreateWithoutDamageClassInput], {nullable:true})
    @Type(() => TypesCreateWithoutDamageClassInput)
    create?: Array<TypesCreateWithoutDamageClassInput>;

    @Field(() => [TypesCreateOrConnectWithoutDamageClassInput], {nullable:true})
    @Type(() => TypesCreateOrConnectWithoutDamageClassInput)
    connectOrCreate?: Array<TypesCreateOrConnectWithoutDamageClassInput>;

    @Field(() => TypesCreateManyDamageClassInputEnvelope, {nullable:true})
    @Type(() => TypesCreateManyDamageClassInputEnvelope)
    createMany?: TypesCreateManyDamageClassInputEnvelope;

    @Field(() => [TypesWhereUniqueInput], {nullable:true})
    @Type(() => TypesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TypesWhereUniqueInput, 'id'>>;
}
