import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TypesWhereUniqueInput } from './types-where-unique.input';
import { Type } from 'class-transformer';
import { TypesCreateInput } from './types-create.input';
import { TypesUpdateInput } from './types-update.input';

@ArgsType()
export class UpsertOneTypesArgs {

    @Field(() => TypesWhereUniqueInput, {nullable:false})
    @Type(() => TypesWhereUniqueInput)
    where!: Prisma.AtLeast<TypesWhereUniqueInput, 'id'>;

    @Field(() => TypesCreateInput, {nullable:false})
    @Type(() => TypesCreateInput)
    create!: TypesCreateInput;

    @Field(() => TypesUpdateInput, {nullable:false})
    @Type(() => TypesUpdateInput)
    update!: TypesUpdateInput;
}
