import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { TypesUpdateWithoutDamageClassInput } from './types-update-without-damage-class.input';

@InputType()
export class TypesUpdateWithWhereUniqueWithoutDamageClassInput {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesUpdateWithoutDamageClassInput, {nullable:false})
    @Type(() => TypesUpdateWithoutDamageClassInput)
    data!: TypesUpdateWithoutDamageClassInput;
}
