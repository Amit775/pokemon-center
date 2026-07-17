import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BerryFlavorsCreateManyInput } from './berry-flavors-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBerryFlavorsArgs {

    @Field(() => [BerryFlavorsCreateManyInput], {nullable:false})
    @Type(() => BerryFlavorsCreateManyInput)
    data!: Array<BerryFlavorsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
