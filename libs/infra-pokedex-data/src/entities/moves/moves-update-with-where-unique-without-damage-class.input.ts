import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MovesWhereUniqueInput } from './moves-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MovesUpdateWithoutDamageClassInput } from './moves-update-without-damage-class.input';

@InputType()
export class MovesUpdateWithWhereUniqueWithoutDamageClassInput {

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;

    @Field(() => MovesUpdateWithoutDamageClassInput, {nullable:false})
    @Type(() => MovesUpdateWithoutDamageClassInput)
    data!: Identity<MovesUpdateWithoutDamageClassInput>;
}
