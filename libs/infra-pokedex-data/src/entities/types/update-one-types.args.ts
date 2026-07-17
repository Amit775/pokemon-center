import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { TypesUpdateInput } from './types-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@pokemon-center/prisma';
import { TypesWhereUniqueInput } from './types-where-unique.input';

@ArgsType()
export class UpdateOneTypesArgs {

    @Field(() => TypesUpdateInput, {nullable:false})
    @Type(() => TypesUpdateInput)
    data!: Identity<TypesUpdateInput>;

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;
}
