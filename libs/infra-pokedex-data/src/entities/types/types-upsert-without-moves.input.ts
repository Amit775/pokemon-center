import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesUpdateWithoutMovesInput } from './types-update-without-moves.input';
import { Type } from 'class-transformer';
import { TypesCreateWithoutMovesInput } from './types-create-without-moves.input';
import { TypesWhereInput } from './types-where.input';

@InputType()
export class TypesUpsertWithoutMovesInput {

    @Field(() => TypesUpdateWithoutMovesInput, {nullable:false})
    @Type(() => TypesUpdateWithoutMovesInput)
    update!: TypesUpdateWithoutMovesInput;

    @Field(() => TypesCreateWithoutMovesInput, {nullable:false})
    @Type(() => TypesCreateWithoutMovesInput)
    create!: TypesCreateWithoutMovesInput;

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: TypesWhereInput;
}
