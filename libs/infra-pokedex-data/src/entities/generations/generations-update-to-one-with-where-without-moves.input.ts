import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import type { Identity } from 'identity-type';
import { GenerationsWhereInput } from './generations-where.input';
import { Type } from 'class-transformer';
import { GenerationsUpdateWithoutMovesInput } from './generations-update-without-moves.input';

@InputType()
export class GenerationsUpdateToOneWithWhereWithoutMovesInput {

    @Field(() => GenerationsWhereInput, {nullable:true})
    @Type(() => GenerationsWhereInput)
    where?: Identity<GenerationsWhereInput>;

    @Field(() => GenerationsUpdateWithoutMovesInput, {nullable:false})
    @Type(() => GenerationsUpdateWithoutMovesInput)
    data!: Identity<GenerationsUpdateWithoutMovesInput>;
}
