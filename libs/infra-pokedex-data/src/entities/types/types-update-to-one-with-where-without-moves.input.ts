import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesWhereInput } from './types-where.input';
import { Type } from 'class-transformer';
import { TypesUpdateWithoutMovesInput } from './types-update-without-moves.input';

@InputType()
export class TypesUpdateToOneWithWhereWithoutMovesInput {

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: TypesWhereInput;

    @Field(() => TypesUpdateWithoutMovesInput, {nullable:false})
    @Type(() => TypesUpdateWithoutMovesInput)
    data!: TypesUpdateWithoutMovesInput;
}
