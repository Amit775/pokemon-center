import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TypesUpdateWithoutGameIndicesInput } from './types-update-without-game-indices.input';
import { Type } from 'class-transformer';
import { TypesCreateWithoutGameIndicesInput } from './types-create-without-game-indices.input';
import { TypesWhereInput } from './types-where.input';

@InputType()
export class TypesUpsertWithoutGameIndicesInput {

    @Field(() => TypesUpdateWithoutGameIndicesInput, {nullable:false})
    @Type(() => TypesUpdateWithoutGameIndicesInput)
    update!: TypesUpdateWithoutGameIndicesInput;

    @Field(() => TypesCreateWithoutGameIndicesInput, {nullable:false})
    @Type(() => TypesCreateWithoutGameIndicesInput)
    create!: TypesCreateWithoutGameIndicesInput;

    @Field(() => TypesWhereInput, {nullable:true})
    @Type(() => TypesWhereInput)
    where?: TypesWhereInput;
}
