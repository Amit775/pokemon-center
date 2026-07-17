import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsUpdateWithoutMovesInput } from './generations-update-without-moves.input';
import { Type } from 'class-transformer';
import { GenerationsCreateWithoutMovesInput } from './generations-create-without-moves.input';
import { GenerationsWhereInput } from './generations-where.input';

@InputType()
export class GenerationsUpsertWithoutMovesInput {

    @Field(() => GenerationsUpdateWithoutMovesInput, {nullable:false})
    @Type(() => GenerationsUpdateWithoutMovesInput)
    update!: Identity<GenerationsUpdateWithoutMovesInput>;

    @Field(() => GenerationsCreateWithoutMovesInput, {nullable:false})
    @Type(() => GenerationsCreateWithoutMovesInput)
    create!: Identity<GenerationsCreateWithoutMovesInput>;

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: Identity<GenerationsWhereInput>;
}
