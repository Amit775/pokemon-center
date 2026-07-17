import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MoveDamageClassesUpdateInput } from './move-damage-classes-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MoveDamageClassesWhereUniqueInput } from './move-damage-classes-where-unique.input';

@ArgsType()
export class UpdateOneMoveDamageClassesArgs {

    @Field(() => MoveDamageClassesUpdateInput, {nullable:false})
    @Type(() => MoveDamageClassesUpdateInput)
    data!: MoveDamageClassesUpdateInput;

    @Field(() => MoveDamageClassesWhereUniqueInput, {nullable:false})
    @Type(() => MoveDamageClassesWhereUniqueInput)
    where!: Prisma.AtLeast<MoveDamageClassesWhereUniqueInput, 'id'>;
}
