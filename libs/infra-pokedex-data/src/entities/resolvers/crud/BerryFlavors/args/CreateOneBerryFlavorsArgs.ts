import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryFlavorsCreateInput } from "../../../inputs/BerryFlavorsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneBerryFlavorsArgs {
  @TypeGraphQL.Field(_type => BerryFlavorsCreateInput, {
    nullable: false
  })
  data!: BerryFlavorsCreateInput;
}
