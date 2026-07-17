import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BerryFlavorsCreateManyBerryInput } from './berry-flavors-create-many-berry.input';
import { Type } from 'class-transformer';

@InputType()
export class BerryFlavorsCreateManyBerryInputEnvelope {

    @Field(() => [BerryFlavorsCreateManyBerryInput], {nullable:false})
    @Type(() => BerryFlavorsCreateManyBerryInput)
    data!: Array<BerryFlavorsCreateManyBerryInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
