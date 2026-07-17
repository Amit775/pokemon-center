import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MoveDamageClassesWhereUniqueInput } from './move-damage-classes-where-unique.input';
import { Type } from 'class-transformer';
import { MoveDamageClassesCreateInput } from './move-damage-classes-create.input';
import { MoveDamageClassesUpdateInput } from './move-damage-classes-update.input';

@ArgsType()
export class UpsertOneMoveDamageClassesArgs {

    @Field(() => MoveDamageClassesWhereUniqueInput, {nullable:false})
    @Type(() => MoveDamageClassesWhereUniqueInput)
    where!: Prisma.AtLeast<MoveDamageClassesWhereUniqueInput, 'id'>;

    @Field(() => MoveDamageClassesCreateInput, {nullable:false})
    @Type(() => MoveDamageClassesCreateInput)
    create!: MoveDamageClassesCreateInput;

    @Field(() => MoveDamageClassesUpdateInput, {nullable:false})
    @Type(() => MoveDamageClassesUpdateInput)
    update!: MoveDamageClassesUpdateInput;
}
