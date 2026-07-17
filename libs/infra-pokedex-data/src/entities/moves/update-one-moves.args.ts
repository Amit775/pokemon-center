import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MovesUpdateInput } from './moves-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MovesWhereUniqueInput } from './moves-where-unique.input';

@ArgsType()
export class UpdateOneMovesArgs {

    @Field(() => MovesUpdateInput, {nullable:false})
    @Type(() => MovesUpdateInput)
    data!: MovesUpdateInput;

    @Field(() => MovesWhereUniqueInput, {nullable:false})
    @Type(() => MovesWhereUniqueInput)
    where!: Prisma.AtLeast<MovesWhereUniqueInput, 'id'>;
}
