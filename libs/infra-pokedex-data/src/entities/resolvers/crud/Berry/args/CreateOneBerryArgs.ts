import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryCreateInput } from "../../../inputs/BerryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneBerryArgs {
  @TypeGraphQL.Field(_type => BerryCreateInput, {
    nullable: false
  })
  data!: BerryCreateInput;
}
