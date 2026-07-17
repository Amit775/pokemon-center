import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@pokemon-center/prisma';
import { MoveDamageClassesWhereUniqueInput } from './move-damage-classes-where-unique.input';
import { Type } from 'class-transformer';
import type { Identity } from 'identity-type';
import { MoveDamageClassesCreateInput } from './move-damage-classes-create.input';
import { MoveDamageClassesUpdateInput } from './move-damage-classes-update.input';

@ArgsType()
export class UpsertOneMoveDamageClassesArgs {

    @Field(() => MoveDamageClassesWhereUniqueInput, {nullable:false})
    @Type(() => MoveDamageClassesWhereUniqueInput)
    where!: Prisma.AtLeast<MoveDamageClassesWhereUniqueInput, 'id'>;

    @Field(() => MoveDamageClassesCreateInput, {nullable:false})
    @Type(() => MoveDamageClassesCreateInput)
    create!: Identity<MoveDamageClassesCreateInput>;

    @Field(() => MoveDamageClassesUpdateInput, {nullable:false})
    @Type(() => MoveDamageClassesUpdateInput)
    update!: Identity<MoveDamageClassesUpdateInput>;
}
