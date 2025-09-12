import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFlavorsCreateManyInput } from "../../../inputs/BerryFlavorsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnBerryFlavorsArgs {
  @TypeGraphQL.Field(_type => [BerryFlavorsCreateManyInput], {
    nullable: false
  })
  data!: BerryFlavorsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
